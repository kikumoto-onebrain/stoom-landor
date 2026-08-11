import { NextResponse } from 'next/server'
import { getCase } from '@/lib/sanity'
import { portableTextToMarkdown } from '@/lib/portable-text-to-markdown'

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseItem = await getCase(slug)

  if (!caseItem) {
    return new NextResponse('Not found', {
      status: 404,
      headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
    })
  }

  const lines = [
    `# ${caseItem.titulo}`,
    '',
    `> Alternate markdown representation for AI agents. Human-facing page: https://stoom.com.br/cases/${slug}`,
    '',
  ]
  if (caseItem.empresa) lines.push(`Empresa: ${caseItem.empresa}`)
  if (caseItem.segmento) lines.push(`Segmento: ${caseItem.segmento}`)
  lines.push('')

  if (caseItem.corpo) lines.push(portableTextToMarkdown(caseItem.corpo as any[]), '')

  if (caseItem.resultados && caseItem.resultados.length > 0) {
    lines.push('## Resultados', '')
    for (const r of caseItem.resultados) lines.push(`- ${r.valor} — ${r.metrica}`)
    lines.push('')
  }

  if (caseItem.depoimento?.texto) {
    lines.push(`> "${caseItem.depoimento.texto}"`, '')
    lines.push(`— ${caseItem.depoimento.nome}, ${caseItem.depoimento.cargo}`, '')
  }

  return new NextResponse(lines.join('\n').trim(), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
