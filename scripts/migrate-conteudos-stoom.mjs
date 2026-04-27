/**
 * Migra os 3 artigos classificados como "Stoom" na planilha (exceto entrega-verde, já migrado).
 * Uso: SANITY_TOKEN=<token> node scripts/migrate-conteudos-stoom.mjs
 */

import { createClient } from '@sanity/client'

const token = process.env.SANITY_TOKEN
if (!token) {
  console.error('❌  Defina a variável SANITY_TOKEN antes de rodar o script.')
  console.error('    Exemplo: SANITY_TOKEN=sk... node scripts/migrate-conteudos-stoom.mjs')
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

const numbered = (text) => ({
  _type: 'block', _key: uid(), style: 'normal', listItem: 'number', level: 1, markDefs: [],
  children: [{ _type: 'span', _key: uid(), text, marks: [] }],
})

// ─── Artigos ──────────────────────────────────────────────────────────────────

const artigos = [
  // 1. /gestao/armario-inteligente/ — OBS: Atualizar conteúdo
  {
    _id: 'conteudo-armario-inteligente',
    _type: 'conteudo',
    titulo: 'Saiba mais sobre o armário inteligente que facilita o seu negócio',
    slug: { _type: 'slug', current: 'armario-inteligente' },
    status: 'publicado',
    dataPublicacao: '2025-04-27T00:00:00Z',
    descricao: 'O armário inteligente é uma solução inovadora desenvolvida para proporcionar mais organização e agilidade em empresas, facilitando o processo de entrega, retirada e devolução de mercadorias.',
    palavrasChave: ['armário inteligente', 'smart locker', 'locker inteligente', 'logística', 'e-commerce'],
    categoria: { _type: 'reference', _ref: 'categoria-smart-lockers' },
    corpo: [
      p('O armário inteligente é uma solução inovadora desenvolvida para proporcionar mais organização e agilidade em empresas, facilitando o processo de entrega, retirada e devolução de mercadorias.'),
      h2('O que é um armário inteligente?'),
      p('O armário inteligente é um sistema automatizado de depósito e retirada de mercadorias instalado em pontos estratégicos de distribuição. Diferentemente dos armários tradicionais, contam com tecnologias inteligentes como fechaduras smart lockers (digitais), que permitem a abertura por meio de QR Codes e senhas digitais.'),
      h2('Armários inteligentes atendem às novas demandas do e-commerce'),
      p('Os armários inteligentes atendem às novas necessidades do segmento em expansão. Segundo Nielsen|Ebit, o e-commerce nacional faturou R$ 262 bilhões em 2022, crescimento de 1,6% em comparação com 2021. O setor deve movimentar US$ 432 bilhões até 2026.'),
      h2('Veja como funcionam os lockers inteligentes no marketplace'),
      p('O funcionamento é simples: após a compra, a empresa gera QR Code para o colaborador fazer o abastecimento no local determinado. O consumidor recebe código por e-mail e WhatsApp, podendo recolher a encomenda apresentando o QR Code no locker.'),
      h2('Saiba quais são as vantagens do armário inteligente para condomínio'),
      p('Os armários inteligentes para condomínio oferecem uma série de benefícios:'),
      bullet('Possibilitam o recebimento da encomenda sem o morador estar no local'),
      bullet('Evitam atrasos na entrega'),
      bullet('Diminuem riscos de extravios'),
      bullet('Agilizam o trabalho dos porteiros e síndicos'),
      bullet('Oferecem maior segurança ao local'),
      bullet('Aumentam o valor agregado do imóvel'),
      bullet('Tornam o espaço mais moderno'),
      bullet('Diminuem o custo'),
      p('Os moradores recebem comunicado automático no momento da entrega.'),
      h2('Quais são as vantagens oferecidas pelo armário inteligente?'),
      h3('Praticidade para a empresa e para o cliente'),
      p('O smart locker elimina a necessidade de contato direto com consumidores no momento da entrega, permitindo que a empresa faça o depósito e o cliente retire quando desejar.'),
      h3('Satisfação do cliente'),
      p('A ferramenta contribui para maior satisfação dos consumidores, facilitando a vida do cliente ao permitir escolher quando recolher encomendas, reduzindo atrasos e evitando riscos de perda ou danificação.'),
      h3('Possibilidade de personalização'),
      p('Os armários permitem personalização do negócio, oferecendo possibilidade de atuar com diferentes fluxos de mercadorias, tornando o empreendimento mais rentável.'),
      h3('Redução de gastos'),
      p('O cliente é responsável por recolher o pedido no lugar indicado, reduzindo custos logísticos da empresa.'),
      h3('Logística reversa'),
      p('O uso dos lockers facilita o processo de logística reversa, permitindo que consumidores devolvam pacotes no lugar escolhido para coleta pela empresa, oferecendo credibilidade e favorecendo fidelização.'),
    ],
  },

  // 2. /logistica/armarios-inteligentes/
  {
    _id: 'conteudo-armarios-inteligentes',
    _type: 'conteudo',
    titulo: 'O papel dos armários inteligentes em negócios digitais',
    slug: { _type: 'slug', current: 'armarios-inteligentes' },
    status: 'publicado',
    dataPublicacao: '2025-04-27T00:00:00Z',
    descricao: 'Os armários inteligentes são uma tendência que cresce entre os empresários de e-commerce, estimulando o autosserviço e trazendo segurança e agilidade para os processos logísticos.',
    palavrasChave: ['armários inteligentes', 'smart locker', 'logística', 'e-commerce', 'last mile', 'logística reversa'],
    categoria: { _type: 'reference', _ref: 'categoria-smart-lockers' },
    corpo: [
      p('Uma novidade que tem ganhado popularidade nos últimos anos entre os empresários de e-commerce são os armários inteligentes. Além de estimular o autosserviço, essa solução ajuda na segurança e na agilidade dos processos logísticos.'),
      h2('Introdução aos Smart Lockers'),
      p('Também chamados de smart locker, os armários inteligentes são uma tendência, não só pela otimização dos processos, mas também pela redução dos custos logísticos. De acordo com o estudo da Fundação Cabral, estima-se que 30% dos custos logísticos vêm do last mile – manuseio até o centro de distribuição.'),
      p('Afinal, o que são os smart lockers? São dispositivos eletrônicos que combinam tecnologia e funcionalidade para oferecer recursos avançados em armazenamento. Os armários são equipados com sensores, sistemas de segurança e conectividade, permitindo uma gestão mais eficiente e conveniente dos itens armazenados.'),
      h2('Como funcionam os smart lockers?'),
      p('De maneira geral, os lockers oferecem a facilidade de selecionar, armazenar e recuperar seus pertences de maneira segura e conveniente. Desde a autenticação até o fechamento dos compartimentos, tudo é controlado eletronicamente, proporcionando praticidade e organização.'),
      h3('Passo a passo de funcionamento:'),
      numbered('O e-commerce que fará o uso do locker selecionará e encaminhará a senha de autenticação, o endereço e todo o passo a passo para a entrega do produto'),
      numbered('Com o código em mãos, o usuário fará o destravamento do armário'),
      numbered('Dependendo das configurações do sistema, você pode enviar uma notificação por mensagem de texto, aplicativo móvel ou e-mail, informando sobre a entrega do produto'),
      numbered('O sistema de gerenciamento monitora em tempo real o status dos compartimentos, mantendo um registro atualizado do uso dos armários'),
      numbered('Os armários inteligentes podem ser monitorados remotamente por meio de um software de gestão, permitindo a detecção de problemas e a realização de manutenção preventiva ou corretiva conforme necessário'),
      p('Vale lembrar que, para e-commerces do mercado alimentício, há opções de guarda-volumes inteligente refrigerado.'),
      h2('Exemplos de utilização'),
      p('Hoje em dia, os armários inteligentes são usados em diferentes setores: academias, centros esportivos, empresas e condomínios. Em ambientes de escritório, são utilizados para armazenar documentos importantes, arquivos ou itens de trabalho. Em cafeterias e restaurantes, podem armazenar alimentos e refeições pré-embalados.'),
      h3('Retirada de produtos do e-commerce'),
      p('Nos e-commerces, os armários inteligentes têm sido cada vez mais utilizados como uma opção conveniente e segura para a entrega de encomendas. Instalados em locais estratégicos, como estações de metrô e shoppings, eles facilitam o acesso para retirada das encomendas.'),
      h2('Por que usar os armários inteligentes?'),
      p('Os smart lockers oferecem diversos benefícios aos negócios digitais, que vão além de possibilitar a entrega de produtos sem loja física.'),
      h3('Liberdade nas entregas'),
      p('Para os e-commerces, os lockers oferecem uma opção de entrega flexível. Os clientes podem retirar suas encomendas em horários e locais convenientes, evitando a necessidade de aguardar a entrega em casa ou lidar com horários restritos de coleta. Além disso, eliminam a etapa do intermediador, otimizando o tempo tanto do empresário como do cliente.'),
      h3('Facilidade na logística reversa'),
      p('Os armários oferecem uma forma conveniente e simplificada para os clientes realizarem suas devoluções. Em vez de ter que embalar e enviar os produtos de volta, é só colocar os itens no compartimento designado no armário.'),
      h3('Redução dos custos'),
      p('Os lockers automatizam tarefas de armazenamento e retirada de itens, eliminando a necessidade de intervenção manual constante e reduzindo a dependência de mão de obra. Também minimizam o risco de extravio ou dano aos produtos, evitando custos adicionais de substituição ou reembolso.'),
      h3('Funciona 24h'),
      p('Com o armário inteligente Locker você tem mais liberdade para escolher o melhor horário para retirar suas encomendas, já que o locker funciona 24 horas por dia.'),
    ],
  },

  // 3. /sobre-a-stoom/armarios-inteligentes-smart-lockers/
  {
    _id: 'conteudo-armarios-inteligentes-smart-lockers',
    _type: 'conteudo',
    titulo: 'Armários Inteligentes: como o Smart Locker da Stoom simplifica suas entregas',
    slug: { _type: 'slug', current: 'armarios-inteligentes-smart-lockers' },
    status: 'publicado',
    dataPublicacao: '2025-04-27T00:00:00Z',
    descricao: 'Simplifique a entrega de produtos do seu negócio on-line com o smart locker da Stoom: versatilidade, praticidade e operação 24h para uma experiência de compra superior.',
    palavrasChave: ['smart locker', 'armário inteligente', 'e-commerce', 'omnichannel', 'logística reversa', 'entrega'],
    categoria: { _type: 'reference', _ref: 'categoria-smart-lockers' },
    corpo: [
      p('Um grande passo para implementar o omnichannel no seu negócio é adotar o smart locker, um armário inteligente capaz de facilitar a logística dos e-commerces. A ideia está se tornando cada vez mais popular no Brasil e contribui para simplificar as entregas de produtos vendidos on-line.'),
      h2('Versatilidade e praticidade'),
      p('Se você está sempre pensando na comodidade dos seus clientes, o armário inteligente pode te ajudar a oferecer mais versatilidade e praticidade nas compras on-line. Com a opção de retirada de produto disponível, o consumidor não precisa ficar preso em casa esperando a encomenda.'),
      p('Esse recurso oferece mais liberdade para que o cliente escolha o melhor horário para retirar os produtos que comprou, já que o locker funciona 24h. Assim, você oferece uma experiência melhor de compra e pode acabar conquistando a fidelidade dos clientes.'),
      h2('Entrega em diversas regiões'),
      p('Muitas pessoas enfrentam dificuldades ao comprar on-line por viverem em áreas consideradas de risco, sem conseguirem receber as encomendas. Para evitar esse problema, o e-commerce pode contar com o smart locker como um ponto viável para que os clientes retirem os produtos.'),
      p('Dessa forma, a loja on-line venderá para pessoas de variadas regiões, enquanto o cliente não precisará se preocupar em receber a entrega, já que poderá escolher um dos armários inteligentes mais próximos para retirar as compras.'),
      h2('Devolução e troca de itens'),
      p('Outro desafio enfrentado pelos e-commerces está na estratégia de logística reversa, ou seja, quando o cliente precisa devolver ou trocar algum produto. É possível simplificar esse processo com o smart locker, já que o consumidor não precisará ir até uma unidade de transportadora e enfrentar filas para entregar o item.'),
      p('Basta deixar o produto que precisa ser devolvido em um dos lockers inteligentes para que a transportadora da loja virtual faça o recolhimento de todos os itens. Uma troca mais rápida e simples pode atrair mais clientes para seu e-commerce!'),
      h2('Como o smart locker da Stoom funciona?'),
      h3('Abastecimento'),
      p('Primeiro, o colaborador da empresa faz o abastecimento dos produtos adquiridos pelos clientes no locker escolhido. Cada abastecimento gera um QR Code — dependendo da rapidez de circulação daquele locker, pode ocorrer mais de um abastecimento por dia.'),
      h3('Retirada'),
      p('Após fazer as compras online, o cliente recebe um e-mail de notificação informando que o pedido foi entregue. Então, poderá retirar os itens no locker escolhido apresentando o QR Code recebido por e-mail — é só recolher o pacote e confirmar a retirada.'),
      h2('Vantagens de utilizar o smart locker'),
      p('Ao contar com o smart locker, é possível entregar os produtos adquiridos na sua loja on-line sem contato direto com os clientes. A tecnologia funciona constantemente, por isso você pode estabelecer o prazo de retirada dos itens conforme desejar.'),
      p('Seus clientes ficarão mais satisfeitos, já que poderão decidir quando retirar os produtos e escolher o locker mais próximo. O locker é customizável: você pode trabalhar com diferentes fluxos dependendo do seu tipo de negócio e personalizar os lockers com adesivos com a logo e as cores da marca.'),
      p('O processo de abastecimento e retirada é simples e seguro, sem risco de a mercadoria se perder ou ser avariada durante a entrega — evitando transtornos para os clientes e representando uma economia para o e-commerce.'),
    ],
  },
]

// ─── Execução ─────────────────────────────────────────────────────────────────

async function migrate() {
  console.log('🚀 Iniciando migração dos conteúdos Stoom...\n')

  for (const artigo of artigos) {
    await client.createOrReplace(artigo)
    console.log(`✅ ${artigo.titulo}`)
    console.log(`   slug: ${artigo.slug.current}\n`)
  }

  console.log('✨ Migração concluída! Acesse /conteudos para verificar.')
}

migrate().catch(err => {
  console.error('❌ Erro durante a migração:', err.message)
  process.exit(1)
})
