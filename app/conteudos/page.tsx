import type { Metadata } from 'next'
import { getConteudos, getCategorias } from '@/lib/sanity'
import ConteudosHomeClient from './ConteudosHomeClient'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Conteúdos | Stoom',
  description: 'Artigos, insights e novidades sobre logística inteligente, smart lockers e gestão de entregas.',
}

export default async function ConteudosPage() {
  const [conteudos, categorias] = await Promise.all([getConteudos(), getCategorias()])
  return <ConteudosHomeClient conteudos={conteudos} categorias={categorias} />
}
