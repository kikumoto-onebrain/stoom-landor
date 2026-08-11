import { NextResponse } from 'next/server'
import { getConteudo } from '@/lib/sanity'
import { portableTextToMarkdown } from '@/lib/portable-text-to-markdown'

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const conteudo = await getConteudo(slug)

  if (!conteudo) {
    return new NextResponse('Not found', {
      status: 404,
      headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
    })
  }

  const lines = [
    `# ${conteudo.titulo}`,
    '',
    `> Alternate markdown representation for AI agents. Human-facing page: https://stoom.com.br/conteudos/${slug}`,
    '',
  ]
  if (conteudo.categoria?.titulo) lines.push(`Categoria: ${conteudo.categoria.titulo}`)
  if (conteudo.dataPublicacao) {
    lines.push(
      `Publicado em: ${new Date(conteudo.dataPublicacao).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })}`
    )
  }
  lines.push('')
  if (conteudo.corpo) lines.push(portableTextToMarkdown(conteudo.corpo as any[]))

  return new NextResponse(lines.join('\n').trim(), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
