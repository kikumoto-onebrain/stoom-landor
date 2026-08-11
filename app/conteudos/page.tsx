import type { Metadata } from 'next'
import { getConteudos, getCategorias } from '@/lib/sanity'
import ConteudosHomeClient from './ConteudosHomeClient'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Conteúdos | Stoom',
  description: 'Artigos, insights e novidades sobre logística inteligente, smart lockers e gestão de entregas.',
}

export default async function ConteudosPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const [conteudos, categorias] = await Promise.all([getConteudos(), getCategorias()])
  const { q } = await searchParams
  return <ConteudosHomeClient conteudos={conteudos} categorias={categorias} initialSearch={q ?? ''} />
}
