import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Challenge from '@/components/Challenge';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Achievements from '@/components/Achievements';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Challenge />
      <Services />
      <HowItWorks />
      <Benefits />
      <Achievements />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
