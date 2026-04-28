'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const parceiros = [
  {
    nome: 'Elgin',
    descricao: 'Líder em Self-Checkout, com 5.000+ implementações no Brasil. Especialista em soluções inteligentes: Terminais Self-Checkout, Auto Atendimento e Smart Locker.',
    logo: '/logos/elgin.png',
  },
  {
    nome: 'Monittrol',
    descricao: 'Pioneiras em Portaria Remota, monitoramento remoto de segurança em condomínios e empresas.',
    logo: '/logos/monittrol.png',
  },
  {
    nome: 'PagSeguro',
    descricao: 'Plataforma digital de serviços financeiros, capacitando negócios na recepção de pagamentos online.',
    logo: '/logos/pagseguro.png',
  },
  {
    nome: 'Pay4Fun',
    descricao: 'Carteira eletrônica pré-paga que torna o processo de pagamento mais prático e seguro.',
    logo: '/logos/pay4fun.png',
  },
  {
    nome: 'Plugg.To',
    descricao: 'Hub que integra o maior número de marketplaces do Brasil, proporcionando recursos para alavancar vendas.',
    logo: '/logos/pluggto.png',
  },
  {
    nome: 'Konduto',
    descricao: 'Pioneira no uso de tecnologias de machine learning, especializada em antifraude online.',
    logo: '/logos/konduto.png',
  },
  {
    nome: 'ClearSale',
    descricao: 'Tecnologia antifraude de alta qualidade para garantir a segurança das plataformas e transações.',
    logo: '/logos/clearsale.png',
  },
  {
    nome: 'PayPal',
    descricao: 'Oferece maneira inteligente e prática de realizar pagamentos online com mais comodidade e segurança.',
    logo: '/logos/paypal.png',
  },
  {
    nome: 'E-commerce Brasil',
    descricao: 'Maior portal brasileiro de e-commerce, referência em indicar tendências e novidades do comércio online.',
    logo: '/logos/ecommercebrasil.png',
  },
  {
    nome: 'ComSchool',
    descricao: 'Única escola brasileira com certificado da Associação Brasileira de Comércio Eletrônico.',
    logo: '/logos/comschool.png',
  },
  {
    nome: 'Campinas Tech',
    descricao: 'Projeto com parceria de startups, hubs de inovação e grandes empresas que promovem o incentivo de novos negócios.',
    logo: '/logos/campinastech.png',
  },
  {
    nome: 'Biso',
    descricao: 'Solução ativa de Business Intelligence focada 100% em e-commerce.',
    logo: '/logos/biso.png',
  },
  {
    nome: 'Auaha',
    descricao: 'Agência de inovação e criatividade dedicada na transformação da presença digital de marcas e negócios.',
    logo: '/logos/auaha.png',
  },
  {
    nome: 'AnyMarket',
    descricao: 'Hub integrador de marketplaces líder na América Latina, simplificando a gestão de vendas multicanal.',
    logo: '/logos/anymarket.png',
  },
  {
    nome: 'AWS',
    descricao: 'Amazon Web Services oferece infraestrutura em nuvem escalável, segura e confiável para operações de alta demanda.',
    logo: '/logos/aws.png',
  },
]

function LogoCard({ parceiro, index }: { parceiro: typeof parceiros[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-white rounded-xl border border-gray-100 p-8 flex flex-col items-center text-center gap-5 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="w-full h-16 flex items-center justify-center">
        <img
          src={parceiro.logo}
          alt={`Logo ${parceiro.nome}`}
          className="max-h-14 max-w-[160px] w-auto object-contain"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement
            target.style.display = 'none'
            const fallback = target.nextElementSibling as HTMLElement | null
            if (fallback) fallback.style.display = 'flex'
          }}
        />
        <span
          className="hidden items-center justify-center font-outfit text-lg font-bold text-brand-primary"
          style={{ display: 'none' }}
        >
          {parceiro.nome}
        </span>
      </div>
      <p className="font-roboto text-sm text-gray-600 leading-relaxed">{parceiro.descricao}</p>
    </motion.div>
  )
}

export default function ParceirosPage() {
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
              Parceiros
            </h1>
            <p className="font-roboto text-xl text-white/70 leading-relaxed">
              Empresas e soluções que integram o ecossistema da Stoom para entregar mais tecnologia, segurança e eficiência aos nossos clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid de parceiros */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parceiros.map((parceiro, i) => (
              <LogoCard key={parceiro.nome} parceiro={parceiro} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
