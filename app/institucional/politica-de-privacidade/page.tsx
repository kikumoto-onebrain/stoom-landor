'use client'

import { m } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const secoes = [
  {
    titulo: '1. Quem Somos',
    paragrafos: [
      'A STOOM presta serviços de tecnologia para o mercado de e-commerce. Desenvolvemos plataformas para empresas (controladoras dos dados), atuando como operadora de dados pessoais, nos termos da LGPD.',
    ],
  },
  {
    titulo: '2. Dados coletados',
    paragrafos: [
      'Coletamos dados pessoais para garantir a prestação adequada dos nossos serviços. Os dados podem incluir:',
    ],
    itens: [
      'Dados cadastrais: nome completo, CPF, RG, endereço, telefone, e-mail',
      'Dados de navegação: IP, cookies, geolocalização, dispositivo e navegador',
      'Dados transacionais: dados bancários, histórico de compras (conforme definido pelo controlador)',
    ],
    paragrafosFinais: [
      'Os dados podem ser fornecidos diretamente por você ou compartilhados pelas empresas controladoras que utilizam nossas soluções.',
    ],
  },
  {
    titulo: '3. Finalidade do tratamento',
    paragrafos: ['Os dados pessoais são tratados para:'],
    itens: [
      'Execução dos serviços contratados pelas controladoras',
      'Atendimento ao titular de dados e suporte técnico',
      'Cumprimento de obrigações legais e regulatórias',
      'Garantia da segurança da informação e prevenção à fraude',
      'Análise estatística e melhoria da experiência na plataforma',
    ],
  },
  {
    titulo: '4. Bases legais utilizadas',
    paragrafos: ['As operações de tratamento se baseiam nas seguintes hipóteses legais previstas na LGPD:'],
    itens: [
      'Execução de contrato ou procedimentos preliminares',
      'Cumprimento de obrigação legal ou regulatória',
      'Exercício regular de direitos',
      'Consentimento do titular, quando aplicável',
      'Legítimo interesse do controlador ou da STOOM, observados os direitos e liberdades do titular',
    ],
  },
  {
    titulo: '5. Compartilhamento de dados',
    paragrafos: ['Os dados pessoais poderão ser compartilhados com:'],
    itens: [
      'Empresas controladoras que utilizam nossas plataformas',
      'Prestadores de serviço e parceiros técnicos que suportam nossa operação',
      'Autoridades públicas ou órgãos reguladores, conforme exigido por lei',
    ],
  },
  {
    titulo: '6. Transferência internacional de dados',
    paragrafos: [
      'Em caso de transferência internacional, adotaremos mecanismos legais de proteção adequados, como cláusulas contratuais específicas e medidas técnicas de segurança.',
    ],
  },
  {
    titulo: '7. Direitos dos titulares',
    paragrafos: ['Em conformidade com a LGPD, você pode exercer os seguintes direitos:'],
    itens: [
      'Confirmação da existência de tratamento',
      'Acesso aos dados',
      'Correção de dados incompletos, inexatos ou desatualizados',
      'Anonimização, bloqueio ou eliminação',
      'Portabilidade dos dados a outro fornecedor',
      'Eliminação dos dados tratados com consentimento',
      'Informação sobre compartilhamento de dados',
      'Revogação do consentimento',
      'Oposição ao tratamento, quando cabível',
    ],
  },
  {
    titulo: '8. Como exercer seus direitos',
    paragrafos: [
      'Você pode enviar sua solicitação a qualquer momento pelo e-mail: falecom@stoom.com.br. O prazo para resposta é de até 15 dias, conforme previsto na LGPD.',
    ],
  },
  {
    titulo: '9. Segurança dos dados',
    paragrafos: [
      'Adotamos medidas técnicas e organizacionais apropriadas para proteger os dados pessoais contra acessos não autorizados, perda, alteração, ou destruição, de acordo com as melhores práticas de mercado.',
    ],
  },
  {
    titulo: '10. Retenção dos dados',
    paragrafos: [
      'Os dados são armazenados pelo tempo necessário para o cumprimento das finalidades informadas ou conforme exigido por obrigação legal ou regulatória.',
    ],
  },
  {
    titulo: '11. Da utilização de cookies e dados de navegação',
    paragrafos: [
      'Utilizamos cookies para aprimorar sua experiência de navegação. Você pode desativar o uso de cookies nas configurações do seu navegador, mas isso poderá impactar algumas funcionalidades do site.',
    ],
  },
  {
    titulo: '12. Encarregado pelo tratamento de dados (DPO)',
    paragrafos: [
      'O encarregado pelo tratamento de dados pessoais na STOOM é Walter Junior. Em caso de dúvidas ou solicitações relacionadas à privacidade, entre em contato pelo e-mail: dpo@stoom.com.br.',
    ],
  },
  {
    titulo: '13. Alterações na política de privacidade',
    paragrafos: [
      'Esta Política poderá ser atualizada a qualquer momento. Notificaremos sobre alterações com antecedência mínima de 30 dias. Ao continuar utilizando nossos serviços após essa data, você concorda com os novos termos.',
    ],
  },
  {
    titulo: '14. Lei aplicável e foro',
    paragrafos: [
      'Esta Política é regida pela legislação brasileira. Eventuais litígios serão resolvidos no foro da comarca de Campinas/SP, com prioridade para resolução amigável.',
    ],
  },
]

export default function PoliticaDePrivacidadePage() {
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
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block text-brand-highlight font-roboto text-sm font-medium tracking-widest uppercase mb-4">
              Institucional
            </span>
            <h1 className="font-outfit text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Política de Privacidade
            </h1>
            <p className="font-roboto text-xl text-white/70 leading-relaxed">
              Como tratamos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei 13.709/2018).
            </p>
          </m.div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 space-y-4 font-roboto text-gray-600 leading-relaxed"
          >
            <p>
              Bem-vindo à Política de Privacidade da Stoom Soluções em Comércio Eletrônico LTDA (CNPJ: 21.542.601/0001-04), localizada na Rua Jerônimo Pattaro, 160, Sala 01Q, Barão Geraldo, Campinas/SP, CEP: 13084-110. Em caso de dúvidas, entre em contato pelo e-mail:{' '}
              <a href="mailto:falecom@stoom.com.br" className="text-brand-secondary hover:underline">
                falecom@stoom.com.br
              </a>
              .
            </p>
            <p>
              Esta Política visa esclarecer como tratamos os dados pessoais dos nossos Usuários, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei 13.709/2018). Ao acessar nossas plataformas ou utilizar nossos serviços, você declara ter lido e concordado com esta Política.
            </p>
          </m.div>

          <div className="space-y-12">
            {secoes.map((secao, i) => (
              <m.div
                key={secao.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(i, 5) * 0.05 }}
              >
                <h2 className="font-outfit text-2xl font-bold text-brand-primary mb-3">
                  {secao.titulo}
                </h2>
                <div className="space-y-3 font-roboto text-gray-600 leading-relaxed">
                  {secao.paragrafos.map((p, pi) => (
                    <p key={pi}>{p}</p>
                  ))}
                  {secao.itens && (
                    <ul className="list-disc pl-5 space-y-1">
                      {secao.itens.map((item, ii) => (
                        <li key={ii}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {secao.paragrafosFinais?.map((p, pi) => (
                    <p key={pi}>{p}</p>
                  ))}
                </div>
              </m.div>
            ))}
          </div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 pt-8 border-t border-gray-100 font-roboto text-gray-600 leading-relaxed"
          >
            <p className="mb-2">A <strong className="text-brand-primary">STOOM</strong> agradece a atenção e confiança.</p>
            <p className="text-sm text-gray-400">Última atualização: abril de 2025.</p>
          </m.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
