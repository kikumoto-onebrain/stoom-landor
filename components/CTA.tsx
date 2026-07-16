'use client';

import { m, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { CircleCheck as CheckCircle } from 'lucide-react';
import Script from 'next/script';
import './hubspot-form.css';

const HUBSPOT_PORTAL_ID = '51547160';
const HUBSPOT_FORM_ID = '6c33c565-d83e-41e5-80e7-75e316ad7c36';

export default function CTA() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 0.93, 0.93, 0.85]);

  const formContainerRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const container = formContainerRef.current;
    if (!container) return;

    let formHasRendered = false;

    const observer = new MutationObserver(() => {
      const hasForm = !!container.querySelector('form[data-hsfc-id="Form"]');

      if (hasForm) {
        formHasRendered = true;
        return;
      }

      if (formHasRendered) {
        formHasRendered = false;

        if (typeof window !== 'undefined') {
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push({ event: 'lead_form_success' });

          if (typeof (window as any).gtag === 'function') {
            (window as any).gtag('event', 'generate_lead', {
              event_category: 'engagement',
              event_label: 'Formulário de contato (HubSpot)',
            });
          }
        }

        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
      }
    });

    observer.observe(container, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contato" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      <m.div style={{ y: bgY }} className="absolute -top-[15%] -bottom-[15%] left-0 right-0">
        <img
          src="/stoom-locker.webp"
          alt="Contato Stoom"
          className="w-full h-full object-cover"
        />
        <m.div style={{ opacity: bgOpacity }} className="absolute inset-0 bg-brand-primary" />
      </m.div>

      <m.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.05, 0.13, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-brand-highlight rounded-full blur-3xl pointer-events-none"
      />
      <m.div
        animate={{ x: [0, -60, 0], opacity: [0.04, 0.09, 0.04] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-secondary rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:sticky lg:top-32 space-y-8 text-center lg:text-left"
          >
            <div>
              <m.div
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-highlight/15 border border-brand-highlight/20 rounded-full mb-6 mx-auto lg:mx-0"
              >
                <m.div
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-2 h-2 bg-brand-highlight rounded-full"
                />
                <span className="text-brand-highlight font-roboto font-medium text-sm">
                  Fale com a Stoom
                </span>
              </m.div>

              <m.h2
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-4xl lg:text-5xl font-outfit font-bold text-white leading-tight"
              >
                Tenha lockers inteligentes{' '}
                <span className="text-brand-secondary">em sua operação</span>
              </m.h2>
            </div>

            <m.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.28, duration: 0.6 }}
              className="text-white/70 font-roboto text-lg leading-relaxed"
            >
              Converse com um de nossos especialistas e descubra como implementar smart lockers.
            </m.p>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <m.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/15 shadow-2xl"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <m.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
                    className="py-16 text-center space-y-5"
                  >
                    <m.div
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 14 }}
                      className="w-20 h-20 bg-brand-highlight/15 border-2 border-brand-highlight/30 rounded-full flex items-center justify-center mx-auto"
                    >
                      <CheckCircle size={36} className="text-brand-highlight" />
                    </m.div>

                    <m.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25, duration: 0.5 }}
                      className="text-2xl font-outfit font-bold text-white"
                    >
                      Mensagem enviada!
                    </m.h3>

                    <m.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.5 }}
                      className="text-white/70 font-roboto"
                    >
                      Nossa equipe entrará em contato em breve.
                    </m.p>
                  </m.div>
                ) : (
                  <m.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      ref={formContainerRef}
                      className="hs-form-html stoom-hs-form"
                      data-region="na1"
                      data-form-id={HUBSPOT_FORM_ID}
                      data-portal-id={HUBSPOT_PORTAL_ID}
                    />

                    <p className="text-center text-xs text-white/40 font-roboto mt-4">
                      Seus dados estão protegidos conforme a LGPD.
                    </p>
                  </m.div>
                )}
              </AnimatePresence>
            </m.div>
          </m.div>
        </div>
      </div>

      <Script
        id="hs-form-embed-script"
        src={`https://js.hsforms.net/forms/embed/developer/${HUBSPOT_PORTAL_ID}.js`}
        strategy="afterInteractive"
      />
    </section>
  );
}