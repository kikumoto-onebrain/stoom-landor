/**
 * Cria (ou atualiza) as categorias no Sanity CMS.
 * Uso: SANITY_TOKEN=<token> node scripts/create-categorias.mjs
 */

import { createClient } from '@sanity/client'

const token = process.env.SANITY_TOKEN
if (!token) {
  console.error('❌  Defina a variável SANITY_TOKEN antes de rodar o script.')
  console.error('    Exemplo: SANITY_TOKEN=sk... node scripts/create-categorias.mjs')
  process.exit(1)
}

const client = createClient({
  projectId: 'lyajz0yy',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

const categorias = [
  {
    _id: 'categoria-smart-lockers',
    _type: 'categoria',
    titulo: 'Smart Lockers',
    slug: { _type: 'slug', current: 'smart-lockers' },
  },
  {
    _id: 'categoria-logistica',
    _type: 'categoria',
    titulo: 'Logística',
    slug: { _type: 'slug', current: 'logistica' },
  },
  {
    _id: 'categoria-tecnologia',
    _type: 'categoria',
    titulo: 'Tecnologia',
    slug: { _type: 'slug', current: 'tecnologia' },
  },
]

async function run() {
  console.log('📁 Criando categorias...\n')
  for (const cat of categorias) {
    await client.createOrReplace(cat)
    console.log(`   ✅ ${cat.titulo} (${cat._id})`)
  }
  console.log('\n✨ Categorias criadas com sucesso!')
}

run().catch(err => {
  console.error('❌ Erro:', err.message)
  process.exit(1)
})
