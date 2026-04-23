/**
 * Script de migração: importa 3 artigos do stoom.com.br para o Sanity CMS
 * Uso: SANITY_TOKEN=<token> node scripts/migrate-sanity.mjs
 */

import { createClient } from '@sanity/client'

const token = process.env.SANITY_TOKEN
if (!token) {
  console.error('❌  Defina a variável SANITY_TOKEN antes de rodar o script.')
  console.error('    Exemplo: SANITY_TOKEN=sk... node scripts/migrate-sanity.mjs')
  process.exit(1)
}

const client = createClient({
  projectId: 'lyajz0yy',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

// ─── Helpers de Portable Text ─────────────────────────────────────────────────

const uid = () => Math.random().toString(36).slice(2, 11)

const p = (text, bold = false) => ({
  _type: 'block', _key: uid(), style: 'normal', markDefs: [],
  children: [{ _type: 'span', _key: uid(), text, marks: bold ? ['strong'] : [] }],
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

// ─── Categorias ───────────────────────────────────────────────────────────────

const categorias = [
  { _id: 'categoria-logistica', _type: 'categoria', titulo: 'Logística', slug: { _type: 'slug', current: 'logistica' } },
  { _id: 'categoria-gestao',    _type: 'categoria', titulo: 'Gestão',    slug: { _type: 'slug', current: 'gestao'    } },
]

// ─── Artigos ──────────────────────────────────────────────────────────────────

const artigos = [
  {
    _id: 'conteudo-entrega-verde',
    _type: 'conteudo',
    titulo: 'Entrega verde: conheça as vantagens das práticas de logística ultrarrápida e sustentável',
    slug: { _type: 'slug', current: 'entrega-verde' },
    status: 'publicado',
    dataPublicacao: '2025-01-31T00:00:00Z',
    descricao: 'A entrega verde surge como resposta às questões ambientais do e-commerce, integrando práticas sustentáveis nos processos logísticos.',
    palavrasChave: ['entrega verde', 'logística sustentável', 'logística ultrarrápida', 'smart lockers', 'veículos elétricos'],
    categoria: { _type: 'reference', _ref: 'categoria-logistica' },
    corpo: [
      p('A entrega verde surge como uma resposta direta às questões ambientais geradas pelo e-commerce ao integrar práticas sustentáveis nos processos logísticos. A estratégia visa reduzir a pegada de carbono por meio de tecnologias limpas e otimização de rotas, sem perder eficiência operacional.'),
      h2('O que é a Entrega Verde?'),
      p('A entrega verde integra práticas e tecnologias ecológicas para minimizar a pegada de carbono e o desperdício de recursos. Ela equilibra redução de custos com sustentabilidade, atraindo consumidores conscientes e fortalecendo a imagem corporativa.'),
      p('Consumidores apoiam cada vez mais empresas que compartilham seus valores ambientais. Isso aumenta o valor da marca e a competitividade, criando relações de confiança mútua.'),
      h2('Logística Ultrarrápida'),
      p('A logística ultrarrápida se destaca pela capacidade de realizar entregas em prazos extremamente curtos, como poucas horas após a compra. Centros de distribuição próximos aos consumidores, combinados com algoritmos inteligentes, tornam isso possível — aumentando a satisfação do cliente sem abrir mão da sustentabilidade.'),
      h2('Tecnologias Habilitadoras'),
      p('Diversas tecnologias tornam a entrega verde viável e escalável:'),
      bullet('Veículos Elétricos: vans e caminhões que eliminam emissões de CO₂ em áreas urbanas e interurbanas, com custos operacionais reduzidos.'),
      bullet('E-bikes: crescente escolha para entregas rápidas de curta distância em centros urbanos, evitando trânsito e emissões.'),
      bullet('Drones: superam o congestionamento do tráfego, evitando veículos tradicionais movidos a combustível.'),
      bullet('Ferramentas de Roteirização Inteligente: algoritmos avançados minimizam consumo de energia e tempo de percurso.'),
      bullet('Centros de Distribuição Urbanos: a proximidade com zonas urbanas reduz significativamente as distâncias de entrega.'),
      bullet('Embalagens Sustentáveis: materiais recicláveis ou reutilizáveis reduzem resíduos e apoiam a economia circular.'),
      h2('Estratégia de Implementação'),
      p('As empresas precisam de planejamento estratégico focado em sustentabilidade, alinhado a investimentos em tecnologia e otimização logística. As etapas principais incluem:'),
      bullet('Implementar software de roteirização inteligente'),
      bullet('Adotar veículos elétricos na frota'),
      bullet('Firmar parcerias com fornecedores e transportadores comprometidos com a sustentabilidade'),
      bullet('Comunicar as iniciativas verdes aos consumidores para engajamento e transparência'),
      h2('Smart Lockers como Solução'),
      p('Os Smart Lockers da Stoom centralizam entregas em pontos estratégicos, reduzindo tentativas de entrega, consumo de combustível e impacto ambiental — ao mesmo tempo em que oferecem conveniência ao consumidor.'),
    ],
  },
  {
    _id: 'conteudo-rpa',
    _type: 'conteudo',
    titulo: 'RPA: saiba como é possível automatizar operações',
    slug: { _type: 'slug', current: 'rpa' },
    status: 'publicado',
    dataPublicacao: '2025-03-13T00:00:00Z',
    descricao: 'A Automação Robótica de Processos (RPA) automatiza tarefas repetitivas e operacionais, liberando profissionais para funções estratégicas.',
    palavrasChave: ['RPA', 'automação robótica de processos', 'automação', 'bots', 'eficiência operacional'],
    categoria: { _type: 'reference', _ref: 'categoria-gestao' },
    corpo: [
      p('No ambiente corporativo, melhorar a eficiência e reduzir custos são desafios constantes. A Automação Robótica de Processos (RPA) surge como solução para otimizar operações: automatiza tarefas repetitivas e operacionais, liberando os profissionais para funções estratégicas.'),
      h2('O que é RPA?'),
      p('A RPA utiliza bots — programas de software que simulam ações humanas em sistemas digitais. Os bots podem realizar uma variedade de tarefas, como preenchimento de formulários, cálculos automáticos, validação de dados e transferências entre diferentes plataformas. A tecnologia oferece escalabilidade sem exigir integrações profundas com sistemas internos.'),
      h2('Benefícios da RPA'),
      bullet('Redução de custos com mão de obra'),
      bullet('Minimização de erros operacionais'),
      bullet('Aumento de produtividade contínua (24/7)'),
      bullet('Padronização de operações'),
      bullet('Cumprimento de normas regulatórias'),
      bullet('Melhoria na experiência do cliente com atendimento automatizado'),
      h2('Tipos de RPA'),
      h3('RPA Assistida'),
      p('Funciona como assistente virtual, ativado pelo usuário para tarefas que exigem decisão humana. Ideal para processos em que o julgamento humano ainda é necessário em determinadas etapas.'),
      h3('RPA Não Assistida'),
      p('Opera autonomamente, realizando automaticamente as tarefas seguindo regras predefinidas, sem necessidade de intervenção. Perfeita para processos completamente estruturados.'),
      h3('RPA Híbrida'),
      p('Combina os dois tipos anteriores, funcionando de forma independente ou sob comando, conforme a necessidade do processo.'),
      h2('Implementação na Empresa'),
      p('As etapas essenciais para uma implementação bem-sucedida incluem:'),
      bullet('Identificar tarefas repetitivas baseadas em regras'),
      bullet('Escolher ferramenta escalável e compatível com os sistemas existentes'),
      bullet('Configurar os bots para cada processo'),
      bullet('Realizar testes antes da entrada em produção'),
      bullet('Monitorar continuamente e ajustar conforme necessário'),
      p('Atividades comuns para automação: entrada de dados, geração de relatórios e validação de informações.'),
      h2('Critérios para Escolher a Plataforma de RPA'),
      h3('Infraestrutura'),
      p('Plataformas baseadas em nuvem oferecem mais flexibilidade e escalabilidade, permitindo adaptar o uso conforme a demanda do negócio.'),
      h3('Facilidade de Uso'),
      p('Ferramentas que dispensam conhecimento avançado em programação aceleram a adoção e reduzem a curva de aprendizado.'),
      h3('Segurança'),
      p('Proteção de dados e conformidade regulatória são aspectos essenciais na escolha da plataforma.'),
      h3('Atualizações e Suporte'),
      p('Atualizações contínuas e uma comunidade ativa garantem a longevidade da solução e suporte em eventuais problemas.'),
      hr(),
      p('A Stoom oferece solução de RPA para automatizar tarefas operacionais, aumentando a produtividade e reduzindo custos da sua operação.'),
    ],
  },
  {
    _id: 'conteudo-atendimento-automatizado',
    _type: 'conteudo',
    titulo: 'Atendimento automatizado: como facilitar a comunicação com o cliente?',
    slug: { _type: 'slug', current: 'atendimento-automatizado' },
    status: 'publicado',
    dataPublicacao: '2025-04-09T00:00:00Z',
    descricao: 'O atendimento automatizado utiliza chatbots, IA e automação para oferecer suporte de qualidade 24/7, reduzindo custos e melhorando a experiência do cliente.',
    palavrasChave: ['atendimento automatizado', 'chatbot', 'IA', 'WhatsApp Business', 'automação de atendimento'],
    categoria: { _type: 'reference', _ref: 'categoria-gestao' },
    corpo: [
      p('O atendimento automatizado não é apenas uma tendência passageira, mas uma ferramenta que permite oferecer um suporte de qualidade por meio de tecnologias como chat, assistentes virtuais e inteligência artificial. Com ele, empresas atendem clientes de forma ágil, personalizada e disponível a qualquer hora.'),
      h2('O que é Atendimento Automatizado?'),
      p('O sistema utiliza tecnologias para conduzir interações com clientes, respondendo dúvidas e resolvendo problemas sem intervenção humana frequente. Pode ser aplicado em redes sociais, mensagens, e-mails e websites — garantindo presença omnichannel.'),
      h2('Como Funciona'),
      p('Os sistemas são alimentados por chatbots programados e IA conversacional, capazes de aprender com as interações ao longo do tempo. A integração com plataformas CRM e ERP permite maior personalização do atendimento com base no histórico do cliente.'),
      h2('Principais Tecnologias'),
      h3('Chatbots'),
      p('Os chatbots são os protagonistas quando o assunto é automação de atendimento. Realizam tarefas como responder perguntas simples, solucionar dúvidas frequentes e agendar horários — sem necessidade de intervenção humana.'),
      h3('WhatsApp Business'),
      p('Canal direto e pessoal para comunicação, utilizado para mensagens de boas-vindas, respostas a dúvidas e atualizações de pedidos. Sua familiaridade com o usuário brasileiro é um diferencial competitivo.'),
      h3('Sistemas de Voz (URA)'),
      p('A Unidade de Resposta Audível permite que clientes resolvam questões simples sem falar com um atendente, com possibilidade de direcionamento para humanos quando necessário.'),
      h3('E-mail e SMS Automatizados'),
      p('O e-mail confirma pedidos e envia notificações detalhadas; o SMS oferece notificações rápidas, especialmente eficaz em saúde, logística e e-commerce.'),
      h2('Benefícios'),
      h3('Agilidade 24/7'),
      p('Suporte disponível em qualquer horário, sem limitações de horário comercial. O cliente é atendido imediatamente, independente de quando entra em contato.'),
      h3('Redução de Custos'),
      p('Automatizar tarefas repetitivas reduz custos operacionais e libera os atendentes para questões mais complexas e de maior valor.'),
      h3('Personalização'),
      p('A integração da IA no atendimento ao cliente permite que os sistemas se adaptem ao perfil do consumidor, oferecendo respostas mais personalizadas e relevantes.'),
      h2('Implementação'),
      p('A implementação requer planejamento estruturado: avaliar quais interações podem ser automatizadas, integrar o sistema aos demais canais, garantir que ele reflita a identidade da marca e monitorar constantemente, realizando ajustes nas respostas conforme o aprendizado acumulado.'),
      hr(),
      p('A Stoom oferece ferramentas de automação omnichannel, chatbots e IA para garantir suporte ágil, reduzindo custos e melhorando a experiência do consumidor.'),
    ],
  },
]

// ─── Execução ─────────────────────────────────────────────────────────────────

async function migrate() {
  console.log('🚀 Iniciando migração...\n')

  // 1. Categorias
  console.log('📁 Criando categorias...')
  for (const cat of categorias) {
    await client.createOrReplace(cat)
    console.log(`   ✅ ${cat.titulo}`)
  }

  // 2. Artigos
  console.log('\n📝 Importando artigos...')
  for (const artigo of artigos) {
    await client.createOrReplace(artigo)
    console.log(`   ✅ ${artigo.titulo}`)
    console.log(`      slug: ${artigo.slug.current}`)
  }

  console.log('\n✨ Migração concluída! Acesse /conteudos para verificar.')
}

migrate().catch(err => {
  console.error('❌ Erro durante a migração:', err.message)
  process.exit(1)
})
