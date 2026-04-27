'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const valores = [
  { titulo: 'Foco no cliente', descricao: 'Cada decisão começa pela experiência de quem usa nosso produto.' },
  { titulo: 'Transparência', descricao: 'Relações abertas com clientes, parceiros e com o ecossistema.' },
  { titulo: 'Inovação contínua', descricao: 'Tecnologia que evolui junto com as demandas do mercado.' },
  { titulo: 'Resultado', descricao: 'Compromisso com entregas que geram impacto real no negócio do cliente.' },
  { titulo: 'Colaboração', descricao: 'Crescemos juntos — com nossos clientes e com as empresas do ecossistema.' },
]

const ecosistema = [
  { nome: 'OneBrain', descricao: 'Outsourcing de talentos de TI com inteligência artificial.' },
  { nome: 'FAST', descricao: 'Fábrica de software com IA, low-code e no-code.' },
  { nome: 'Kolivo', descricao: 'Operações de TI inteligentes e monitoramento em tempo real.' },
  { nome: 'Outforce', descricao: 'Tech hunting e aquisição de profissionais de tecnologia.' },
  { nome: 'Grilo', descricao: 'Validação de desenvolvedores por análise prática de código real.' },
]

const numeros = [
  { valor: '+10', label: 'anos no mercado' },
  { valor: '+200', label: 'profissionais no ecossistema' },
  { valor: 'R$2bi+', label: 'em TPV processado anualmente' },
  { valor: 'Top 4', label: 'Great Place to Work' },
]

export default function QuemSomosPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-brand-primary pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-highlight rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-secondary rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-brand-highlight font-roboto text-sm font-medium tracking-widest uppercase mb-4">
              Institucional
            </span>
            <h1 className="font-outfit text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Quem somos
            </h1>
            <p className="font-roboto text-xl text-white/70 leading-relaxed">
              Mais de 10 anos transformando a logística de entregas com tecnologia de smart lockers acessível, segura e conectada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sobre */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-outfit text-4xl font-bold text-brand-primary mb-6">
                Tecnologia que simplifica a última milha
              </h2>
              <div className="space-y-4 font-roboto text-gray-600 leading-relaxed">
                <p>
                  A Stoom é uma empresa especializada em smart lockers e plataforma de gestão de entregas. Fundada em 2014, em Campinas (SP), por ex-alunos da Unicamp, nascemos como spin-off da OneBrain — software house com mais de duas décadas de mercado.
                </p>
                <p>
                  Ao longo de mais de 10 anos, evoluímos para ser referência em soluções de armários inteligentes para o varejo, condomínios, indústrias e operações logísticas. Nosso smart locker combina hardware e software próprio para automatizar a entrega, retirada e devolução de produtos com segurança, rastreabilidade e controle em tempo real.
                </p>
                <p>
                  Atendemos empresas como Petz, Tenda Atacado, iFood Shop e Zee.Dog — parceiros que confiam na Stoom para elevar a experiência de entrega dos seus clientes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {numeros.map((item, i) => (
                <div
                  key={i}
                  className="bg-brand-light rounded-xl p-6 flex flex-col gap-2"
                >
                  <span className="font-outfit text-3xl font-bold text-brand-secondary">
                    {item.valor}
                  </span>
                  <span className="font-roboto text-sm text-brand-primary/70">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-outfit text-4xl font-bold text-brand-primary mb-4">
              Missão, Visão e Valores
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100"
            >
              <div className="w-12 h-12 bg-brand-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-brand-secondary text-xl font-outfit font-bold">M</span>
              </div>
              <h3 className="font-outfit text-xl font-bold text-brand-primary mb-3">Missão</h3>
              <p className="font-roboto text-gray-600 leading-relaxed">
                Simplificar e automatizar a logística de entregas por meio de smart lockers seguros e conectados, criando uma experiência de compra superior para consumidores e empresas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-gray-100"
            >
              <div className="w-12 h-12 bg-brand-highlight/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-brand-highlight text-xl font-outfit font-bold">V</span>
              </div>
              <h3 className="font-outfit text-xl font-bold text-brand-primary mb-3">Visão</h3>
              <p className="font-roboto text-gray-600 leading-relaxed">
                Ser a referência em smart lockers e gestão de entregas no Brasil, impulsionando a transformação logística com tecnologia acessível e escalável.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-outfit text-2xl font-bold text-brand-primary mb-6 text-center">Valores</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {valores.map((v, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                  <h4 className="font-outfit font-semibold text-brand-primary mb-2">{v.titulo}</h4>
                  <p className="font-roboto text-sm text-gray-500 leading-relaxed">{v.descricao}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ecossistema Landor */}
      <section className="py-24 bg-brand-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-4"
          >
            <span className="inline-block text-brand-highlight font-roboto text-sm font-medium tracking-widest uppercase mb-4">
              Parte de algo maior
            </span>
            <h2 className="font-outfit text-4xl font-bold text-white mb-4">
              Ecossistema Landor
            </h2>
            <p className="font-roboto text-white/70 text-lg max-w-2xl mx-auto mb-12">
              A Stoom integra a Landor, uma holding de tecnologia que reúne empresas especializadas para resolver desafios complexos de forma integrada. Juntas, cobrimos todo o ciclo de transformação digital.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {ecosistema.map((empresa, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <h3 className="font-outfit text-lg font-bold text-white mb-2">{empresa.nome}</h3>
                <p className="font-roboto text-sm text-white/60 leading-relaxed">{empresa.descricao}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.landor.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-roboto text-brand-highlight hover:text-brand-highlight/80 transition-colors font-medium"
            >
              Conheça o ecossistema Landor →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
