/**
 * Migra as notícias "Stoom na Mídia" do stoom.com.br para o Sanity CMS.
 * Uso: SANITY_TOKEN=<token> node scripts/migrate-midia.mjs
 *
 * Obs: a maioria das imagens era lazy-loaded no WordPress e não foi recuperável.
 * Adicione as imagens manualmente via /studio-content após rodar este script.
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

const noticias = [
  {
    titulo: 'Uma análise sobre pricing e a concorrência no mercado de e-commerce',
    veiculo: 'CNDL Varejo S.A.',
    urlExterna: 'https://cndl.org.br/varejosa/uma-analise-sobre-pricing-e-a-concorrencia-no-mercado-de-e-commerce/',
    dataPublicacao: null,
  },
  {
    titulo: 'Orçamento apertado? Estratégias e dicas para viabilizar projetos de e-commerce',
    veiculo: 'Economia SP',
    urlExterna: 'https://economiasp.com/2023/08/24/orcamento-apertado-estrategias-e-dicas-para-viabilizar-projetos-de-e-commerce/',
    dataPublicacao: '2023-08-24',
  },
  {
    titulo: 'Quais critérios devem pesar para a escolha de uma plataforma de e-commerce?',
    veiculo: 'Jornal Empresas & Negócios',
    urlExterna: 'https://jornalempresasenegocios.com.br/manchete-principal/quais-criterios-devem-pesar-para-a-escolha-de-uma-plataforma-de-e-commerce/',
    dataPublicacao: '2023-08-23',
  },
  {
    titulo: 'Stoom apresenta suas soluções e plataformas customizáveis no Fórum E-Commerce Brasil 2023',
    veiculo: 'E-commerce Brasil',
    urlExterna: 'https://www.ecommercebrasil.com.br/noticias/stoom-no-forum-e-commerce-brasil-2023',
    dataPublicacao: '2023-06-21',
  },
  {
    titulo: 'O futuro do e-commerce está na customização e nos super apps',
    veiculo: 'Mercado & Consumo',
    urlExterna: 'https://mercadoeconsumo.com.br/19/05/2023/artigos/o-futuro-do-e-commerce-esta-na-customizacao-e-nos-super-apps/',
    dataPublicacao: '2023-05-19',
  },
  {
    titulo: 'Stoom e LelloLAB se unem em projeto para valorizar os Tesouros do Bairro',
    veiculo: 'Sindiconet',
    urlExterna: 'https://www.sindiconet.com.br/informese/app-para-divulgacao-de-servicos-em-condominios-noticias-radar-lello',
    dataPublicacao: '2023-05-08',
  },
  {
    titulo: 'Tenda investe em omnichannel para incrementar vendas',
    veiculo: 'S/A+ Varejo',
    urlExterna: 'https://samaisvarejo.com.br/detalhe/reportagens/tenda-investe-em-omnichannel-para-incrementar-vendas',
    dataPublicacao: '2023-03-07',
  },
  {
    titulo: 'Petz estrutura loja virtual personalizada com plataforma da Stoom',
    veiculo: 'Mercado & Consumo',
    urlExterna: 'https://mercadoeconsumo.com.br/21/02/2023/ecommerce/petz-estrutura-loja-virtual-personalizada-com-plataforma-da-stoom/',
    dataPublicacao: '2023-02-21',
  },
  {
    titulo: 'Stoom apresenta soluções inteligentes para plataformas de marketplace',
    veiculo: 'Infor Channel',
    urlExterna: 'https://inforchannel.com.br/2023/01/10/stoom-apresenta-solucoes-inteligentes-para-plataformas-de-marketplace/',
    dataPublicacao: '2023-01-10',
  },
  {
    titulo: 'Empresas levam smart lockers para condomínios',
    veiculo: 'Economia SP',
    urlExterna: 'https://economiasp.com/2023/01/09/empresas-levam-smart-lockers-para-condominios/',
    dataPublicacao: '2023-01-09',
  },
  {
    titulo: 'Como e por que proteger o seu e-commerce de ataques cibernéticos',
    veiculo: 'Infor Channel',
    urlExterna: 'https://inforchannel.com.br/2022/12/21/como-e-por-que-proteger-o-seu-e-commerce-de-ataques-ciberneticos/',
    dataPublicacao: '2022-12-21',
  },
  {
    titulo: 'Onebrain e Stoom ampliam atuação e chegam aos Estados Unidos',
    veiculo: 'Infor Channel',
    urlExterna: 'https://inforchannel.com.br/2022/11/08/onebrain-e-stoom-ampliam-atuacao-e-chegam-aos-estados-unidos/',
    dataPublicacao: '2022-11-08',
  },
  {
    titulo: 'Novas possibilidades do e-commerce pelo metaverso',
    veiculo: 'Superhiper',
    urlExterna: 'https://superhiper.com.br/novas-possibilidade-do-e-commerce-pelo-metaverso/',
    dataPublicacao: '2022-10-04',
  },
  {
    titulo: 'Varejo digital é uma realidade inadiável',
    veiculo: 'Economia SP',
    urlExterna: 'https://economiasp.com/2022/09/22/varejo-digital-e-uma-realidade-inadiavel/',
    dataPublicacao: '2022-09-22',
  },
]

async function main() {
  console.log(`Migrando ${noticias.length} notícias para o Sanity...\n`)

  for (const noticia of noticias) {
    const doc = {
      _type: 'midia',
      titulo: noticia.titulo,
      veiculo: noticia.veiculo,
      urlExterna: noticia.urlExterna,
      status: 'publicado',
      ...(noticia.dataPublicacao && { dataPublicacao: noticia.dataPublicacao }),
    }

    try {
      await client.create(doc)
      console.log(`✅ ${noticia.titulo.slice(0, 60)}...`)
    } catch (err) {
      console.error(`❌ Erro em "${noticia.titulo.slice(0, 40)}":`, err.message)
    }
  }

  console.log('\nMigração concluída. Adicione as imagens via /studio-content.')
}

main()
