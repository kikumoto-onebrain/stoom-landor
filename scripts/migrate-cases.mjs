/**
 * Script de migração: importa os 4 cases do stoom.com.br para o Sanity CMS
 * Uso: SANITY_TOKEN=<token> node scripts/migrate-cases.mjs
 */

import { createClient } from '@sanity/client'

const token = process.env.SANITY_TOKEN
if (!token) {
  console.error('❌  Defina a variável SANITY_TOKEN antes de rodar o script.')
  process.exit(1)
}

const client = createClient({
  projectId: 'lyajz0yy',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

const uid = () => Math.random().toString(36).slice(2, 11)

const p = (text) => ({
  _type: 'block', _key: uid(), style: 'normal', markDefs: [],
  children: [{ _type: 'span', _key: uid(), text, marks: [] }],
})

const bold = (text) => ({
  _type: 'block', _key: uid(), style: 'normal', markDefs: [],
  children: [{ _type: 'span', _key: uid(), text, marks: ['strong'] }],
})

const h2 = (text) => ({
  _type: 'block', _key: uid(), style: 'h2', markDefs: [],
  children: [{ _type: 'span', _key: uid(), text, marks: [] }],
})

const h3 = (text) => ({
  _type: 'block', _key: uid(), style: 'h3', markDefs: [],
  children: [{ _type: 'span', _key: uid(), text, marks: [] }],
})

const bullet = (text) => ({
  _type: 'block', _key: uid(), style: 'normal', listItem: 'bullet', level: 1, markDefs: [],
  children: [{ _type: 'span', _key: uid(), text, marks: [] }],
})

const hr = () => ({ _type: 'divisoria', _key: uid(), style: 'hr' })

// ─── Cases ────────────────────────────────────────────────────────────────────

const cases = [
  {
    _id: 'case-lello-lab',
    _type: 'case',
    titulo: 'Lello Lab – Tesouros do Bairro: case de sucesso',
    slug: { _type: 'slug', current: 'lello-lab-tesouros-do-bairro' },
    empresa: 'Lello Lab',
    segmento: 'Comunidade & Tecnologia Social',
    status: 'publicado',
    dataPublicacao: '2022-10-01T00:00:00Z',
    descricaoCurta: 'Stoom e Lello Lab se unem em projeto para valorizar os Tesouros do Bairro — uma plataforma que conecta talentos, produtos e serviços da vizinhança.',
    depoimento: {
      texto: 'Buscávamos exatamente isso no parceiro, alguém que criasse o Tenda Lab, o nosso laboratório de projetos e inovação.',
      nome: 'Stallin Silva',
      cargo: 'CEO da Stoom',
    },
    corpo: [
      p('A iniciativa Tesouros do Bairro nasceu da parceria entre a Stoom e o LelloLAB, braço de inovação social do Grupo Lello. O projeto foi apresentado em São Paulo em outubro de 2022, com a proposta de valorizar talentos, produtos e serviços locais por meio de uma plataforma digital acessível.'),
      h2('A Iniciativa'),
      p('O Tesouros do Bairro funciona como uma vitrine virtual de talentos, produtos e serviços oferecidos por profissionais da vizinhança. A plataforma tem como objetivo fortalecer a comunidade local, estimular o compartilhamento de habilidades e promover a economia criativa nos bairros.'),
      p('O escopo inicial esperava alcançar cerca de mil usuários em São Paulo. O sucesso da proposta, porém, levou à evolução do projeto de um site para um aplicativo completo, disponível gratuitamente para iOS e Android.'),
      h2('Tecnologia e Solução'),
      p('A Stoom desenvolveu uma plataforma personalizada com funcionalidade territorial baseada em bairros — permitindo que os usuários encontrem e valorizem serviços próximos de onde vivem. A solução combina tecnologia acessível com impacto social direto nas comunidades.'),
      h2('Depoimentos do Projeto'),
      p('Cinthia Fagundes, especialista de comunidade envolvida no projeto, destacou a importância da plataforma para o fortalecimento de vínculos comunitários. Camila Conti, especialista em tecnologias sociais, reforçou o papel da inovação para democratizar o acesso a oportunidades locais.'),
    ],
  },
  {
    _id: 'case-ifood-shop',
    _type: 'case',
    titulo: 'iFood Shop: case de sucesso',
    slug: { _type: 'slug', current: 'ifood-shop' },
    empresa: 'iFood Shop',
    segmento: 'Marketplace B2B',
    status: 'publicado',
    dataPublicacao: '2022-06-01T00:00:00Z',
    descricaoCurta: 'Marketplace B2B desenvolvido pela Stoom que conecta fornecedores de insumos aos restaurantes parceiros do iFood — a maior foodtech da América Latina.',
    depoimento: {
      texto: 'Em resumo, o site é a interface entre restaurantes e fornecedores de suprimentos.',
      nome: 'César Bueno',
      cargo: 'Techlead, Stoom',
    },
    corpo: [
      p('O iFood Shop é um marketplace B2B desenvolvido pela Stoom para o iFood — a maior foodtech da América Latina. A plataforma conecta fornecedores de suprimentos diretamente aos restaurantes parceiros do iFood, oferecendo ingredientes, embalagens, uniformes, equipamentos e acessórios em um ambiente padronizado e eficiente.'),
      h2('O Desafio'),
      p('O iFood precisava de uma solução que simplificasse e padronizasse a relação entre seus restaurantes parceiros e os fornecedores de insumos. A operação multivendedor exigia gestão de estoque via API, logística flexível e múltiplas formas de pagamento — tudo isso em uma interface intuitiva para os restaurantes.'),
      h2('A Solução'),
      p('A Stoom construiu o iFood Shop com um conjunto completo de funcionalidades para suportar a complexidade do negócio:'),
      bullet('Promoções personalizadas por fornecedor, produto, cliente e voucher'),
      bullet('Vitrines dinâmicas por geolocalização'),
      bullet('Precificação variável baseada em quantidade de pedido'),
      bullet('Gestão de estoque integrada via API'),
      bullet('Múltiplas opções de pagamento: boleto, cartão e sistema proprietário'),
      bullet('Logística flexível: Correios e transportadoras privadas'),
      bullet('Cálculo de frete por peso e faixa de CEP'),
      h2('Resultado'),
      p('O iFood Shop consolidou-se como a interface padrão entre os restaurantes parceiros do iFood e seus fornecedores de suprimentos, simplificando a operação e reduzindo a fricção no processo de compra B2B.'),
    ],
  },
  {
    _id: 'case-tenda-atacado',
    _type: 'case',
    titulo: 'Tenda Atacado: case de sucesso',
    slug: { _type: 'slug', current: 'tenda-atacado' },
    empresa: 'Tenda Atacado',
    segmento: 'Varejo de Autosserviço',
    status: 'publicado',
    dataPublicacao: '2021-06-01T00:00:00Z',
    descricaoCurta: 'A customização da plataforma Stoom foi fundamental para que a Tenda Atacado agregasse diferentes funcionalidades e crescesse 5x desde a implementação.',
    resultados: [
      { _key: uid(), valor: '5x', metrica: 'crescimento desde a implementação' },
      { _key: uid(), valor: '43', metrica: 'lojas integradas ao sistema' },
    ],
    depoimento: {
      texto: 'Buscávamos exatamente isso no parceiro, alguém que criasse o Tenda Lab, o nosso laboratório de projetos e inovação.',
      nome: 'Daniel Nepomuceno',
      cargo: 'Diretor de E-commerce e Transformação Digital, Tenda Atacado',
    },
    corpo: [
      p('A Tenda Atacado é uma das maiores redes de varejo de autosserviço do Brasil. Com a aceleração do e-commerce durante a pandemia, a empresa precisava de uma plataforma robusta para gerenciar pedidos online em escala, integrando 43 lojas físicas ao canal digital.'),
      h2('O Desafio'),
      p('O crescimento exponencial de pedidos durante a pandemia exigiu uma solução capaz de gerenciar múltiplos estoques distribuídos em 43 lojas diferentes, com operação omnichannel complexa e alta capacidade de personalização conforme as regras de negócio da Tenda.'),
      h2('A Solução'),
      p('A Stoom implementou sua plataforma com customizações profundas para atender às necessidades específicas do negócio:'),
      bullet('Sistema de agendamento para controlar a capacidade produtiva de cada loja'),
      bullet('Integração omnichannel completa entre o digital e as 43 lojas físicas'),
      bullet('Picking App para separação eficiente de pedidos'),
      bullet('Smart Locker para retirada em loja (Clique & Retire)'),
      bullet('Metodologia ágil com squads dedicados'),
      h2('Resultados'),
      p('Desde a implementação da plataforma Stoom, a Tenda Atacado cresceu 5x em operação digital. A eficiência multicanal e a capacidade de escalar a operação sem perder controle tornaram-se diferenciais competitivos importantes para a rede.'),
      p('O projeto evoluiu para a criação do Tenda Lab — laboratório interno de projetos e inovação da rede — consolidando a Stoom como parceiro estratégico de transformação digital.'),
    ],
  },
  {
    _id: 'case-petz',
    _type: 'case',
    titulo: 'Petz: case de sucesso',
    slug: { _type: 'slug', current: 'petz' },
    empresa: 'Petz',
    segmento: 'Pet Retail & E-commerce',
    status: 'publicado',
    dataPublicacao: '2020-01-01T00:00:00Z',
    descricaoCurta: 'A maior rede de pet shops do Brasil cresceu 85x em receita online com a plataforma Stoom — e realizou um IPO de mais de R$ 3 bilhões em 2020.',
    resultados: [
      { _key: uid(), valor: '85x', metrica: 'crescimento em receita online desde 2015' },
      { _key: uid(), valor: '140+', metrica: 'lojas físicas integradas' },
      { _key: uid(), valor: 'R$ 3bi+', metrica: 'levantados no IPO de 2020' },
      { _key: uid(), valor: '7h → horas', metrica: 'redução no prazo de entrega' },
    ],
    depoimento: {
      texto: 'Integrar o e-commerce ao ERP da Petz nos permitiu usar o estoque de cada loja para oferecer prazos de entrega muito menores, com frete mais competitivo.',
      nome: 'Lino Melhado',
      cargo: 'Especialista Técnico, Stoom',
    },
    corpo: [
      p('A Petz é a maior rede de pet shops do Brasil, com mais de 140 lojas físicas em 18 estados e uma plataforma de e-commerce completa. Desde 2015, a parceria com a Stoom transformou radicalmente a presença digital da empresa — culminando em um IPO de mais de R$ 3 bilhões em 2020.'),
      h2('O Desafio'),
      p('A Petz precisava modernizar sua presença online e criar uma experiência de compra verdadeiramente omnichannel, integrando as lojas físicas à plataforma digital para melhorar a conveniência do cliente e a eficiência operacional. O prazo de entrega de 7 dias precisava ser drasticamente reduzido.'),
      h2('A Solução'),
      p('A Stoom implementou um ecossistema digital completo para a Petz, incluindo:'),
      bullet('Integração do e-commerce com o ERP de todas as lojas físicas'),
      bullet('Retirada em loja em até 1 hora (ship-from-store)'),
      bullet('Modelo logístico ship-from-store para entregas regionais mais rápidas'),
      bullet('Aplicativo mobile lançado em 2018'),
      bullet('Tecnologia de reconhecimento facial por IA para identificação de interesse em pets'),
      bullet('Sistema de Smart Locker com acesso 24/7 via QR code'),
      bullet('Marketplace de produtos importados'),
      bullet('Sistema de agendamento de consultas veterinárias (Seres)'),
      h2('Resultados'),
      p('A transformação digital da Petz com a Stoom gerou resultados extraordinários. A receita online cresceu 85x desde o início da parceria em 2015. O prazo de entrega foi reduzido de 7 dias para horas, com frete mais competitivo graças ao fulfillment regional.'),
      p('A solução de IA desenvolvida conquistou o Gold Lion no Festival Internacional de Criatividade de Cannes. Em 2020, a Petz realizou seu IPO na B3, levantando mais de R$ 3 bilhões — com a plataforma digital como um dos principais ativos de valor da empresa.'),
    ],
  },
]

// ─── Execução ─────────────────────────────────────────────────────────────────

async function migrate() {
  console.log('🚀 Iniciando migração dos cases...\n')

  for (const item of cases) {
    await client.createOrReplace(item)
    console.log(`✅ ${item.empresa}  (slug: ${item.slug.current})`)
  }

  console.log('\n✨ Migração concluída! Acesse /cases-de-sucesso para verificar.')
}

migrate().catch(err => {
  console.error('❌ Erro durante a migração:', err.message)
  process.exit(1)
})
