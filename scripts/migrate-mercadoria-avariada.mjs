/**
 * Migra o artigo "Mercadoria avariada na entrega" adaptado para o contexto de smart lockers.
 * Uso: SANITY_TOKEN=<token> node scripts/migrate-mercadoria-avariada.mjs
 */

import { createClient } from '@sanity/client'

const token = process.env.SANITY_TOKEN
if (!token) {
  console.error('❌  Defina a variável SANITY_TOKEN antes de rodar o script.')
  console.error('    Exemplo: SANITY_TOKEN=sk... node scripts/migrate-mercadoria-avariada.mjs')
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

// ─── Artigo ───────────────────────────────────────────────────────────────────

const artigo = {
  _id: 'conteudo-mercadoria-avariada-transportadora',
  _type: 'conteudo',
  titulo: 'Mercadoria avariada na entrega: como os smart lockers eliminam esse problema',
  slug: { _type: 'slug', current: 'mercadoria-avariada-pela-transportadora' },
  status: 'publicado',
  dataPublicacao: '2025-04-27T00:00:00Z',
  descricao: 'Avarias na entrega geram prejuízo, insatisfação e custos jurídicos. Entenda por que o problema acontece e como os smart lockers eliminam o principal fator de risco: o excesso de manuseio na última milha.',
  palavrasChave: [
    'mercadoria avariada',
    'avaria na entrega',
    'smart locker',
    'última milha',
    'locker inteligente',
    'gestão de entregas',
    'logística',
    'dano no transporte',
    'entrega segura',
  ],
  categoria: { _type: 'reference', _ref: 'categoria-smart-lockers' },
  corpo: [
    p('Receber uma mercadoria danificada é um dos problemas mais frustrantes para o consumidor — e um dos mais custosos para quem vende. Além do prejuízo financeiro, avarias na entrega geram atrito com o cliente, processos de troca, logística reversa e, em muitos casos, disputas jurídicas.'),
    p('O Código Civil (art. 750) é claro: a transportadora assume responsabilidade pela mercadoria desde o momento em que a recebe até a chegada ao destino. Já o Código de Defesa do Consumidor responsabiliza solidariamente o fornecedor. Na prática, isso significa que o problema é de todos — e resolvê-lo de forma estrutural é mais inteligente do que tratar o sintoma caso a caso.'),

    h2('Por que as avarias acontecem na última milha?'),
    p('A maior concentração de danos ocorre justamente na última milha: o trecho final da entrega, do centro de distribuição até o destinatário. É nesse ponto que o volume de manuseio é maior, os processos são menos controlados e o risco de dano aumenta significativamente.'),
    p('Os principais fatores são:'),
    bullet('Múltiplas tentativas de entrega — cada tentativa frustrada exige novo transporte, novo manuseio e nova exposição ao risco'),
    bullet('Transferências entre operadores — quanto mais mãos tocam no pacote, maior a chance de avaria'),
    bullet('Falta de rastreabilidade no ponto de entrega — sem registro do estado da mercadoria no momento da entrega, fica difícil identificar onde o dano ocorreu'),
    bullet('Entregas condicionadas à presença do destinatário — quando ninguém está em casa, o pacote pode ficar exposto ou ser devolvido ao CD'),

    h2('Como o smart locker elimina esses fatores de risco'),
    p('O smart locker transforma a última milha: em vez de tentar entregar diretamente ao destinatário — o que depende de hora, presença e condições imprevisíveis —, a mercadoria é depositada uma única vez em um armário inteligente seguro, onde fica protegida até o momento da retirada.'),
    p('Essa mudança de modelo elimina ou reduz drasticamente os principais vetores de avaria:'),

    h3('Uma entrega, um manuseio'),
    p('O pacote é depositado no locker pelo entregador e retirado pelo destinatário. Não há segundo transporte, não há devolução ao CD, não há nova tentativa. O número de manuseios cai para o mínimo possível.'),

    h3('Proteção física do produto'),
    p('Os compartimentos dos smart lockers são fechados, protegidos das condições climáticas e de acesso não autorizado. O produto permanece seguro desde o depósito até a retirada, sem exposição a impactos, chuva ou terceiros.'),

    h3('Rastreabilidade completa'),
    p('Cada operação no locker — depósito, abertura, retirada — é registrada com timestamp e identificação. Isso cria um histórico auditável que protege tanto o operador logístico quanto o destinatário em caso de questionamentos sobre o estado da mercadoria.'),

    h3('Sem dependência de horário ou presença'),
    p('O destinatário retira a encomenda quando quiser, pelo QR Code ou código recebido por mensagem. Isso elimina as tentativas frustradas — principal causa de re-manuseio e dano acumulado.'),

    h2('E quando a avaria já aconteceu?'),
    p('Mesmo com boas práticas, danos podem ocorrer antes do produto chegar ao locker. Nesses casos, a rastreabilidade do sistema ajuda a identificar em qual etapa o problema ocorreu, facilitando o acionamento da responsabilidade correta — transportadora ou fornecedor — e agilizando o processo de ressarcimento via Nota Fiscal, conforme exige a legislação.'),
    p('A logística reversa também se beneficia: o cliente pode depositar o produto para troca ou devolução diretamente no locker, sem depender de agendamento ou presença de um atendente.'),

    h2('Menos avarias, mais confiança'),
    p('Avarias na entrega não são apenas um problema operacional — são um problema de relação com o cliente. Cada entrega danificada é uma experiência negativa que compromete a fidelização e aumenta o custo de aquisição do próximo pedido.'),
    p('Ao substituir o modelo de entrega tradicional — com suas múltiplas tentativas, transferências e pontos cegos — pelo smart locker, empresas e operadores logísticos reduzem o risco de avaria na origem: o excesso de manuseio. O resultado é uma última milha mais segura, rastreável e eficiente para todos os lados.'),
  ],
}

// ─── Execução ─────────────────────────────────────────────────────────────────

async function run() {
  console.log(`📝 Migrando: ${artigo.titulo}`)
  try {
    const result = await client.createOrReplace(artigo)
    console.log(`✅ Criado: ${result._id}`)
  } catch (err) {
    console.error(`❌ Erro:`, err.message)
  }
}

run()
