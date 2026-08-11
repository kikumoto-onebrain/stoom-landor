import { NextResponse } from 'next/server'
import { getMidias } from '@/lib/sanity'

export async function GET() {
  const midias = await getMidias()

  const lines = [
    '# Stoom na Mídia | Stoom',
    '',
    '> Alternate markdown representation for AI agents. Human-facing page: https://stoom.com.br/stoom-na-midia',
    '',
    '## Stoom na Mídia',
    '',
    'Veja o que a imprensa e os principais veículos do mercado estão falando sobre a Stoom.',
    '',
  ]

  if (midias.length === 0) {
    lines.push('Nenhuma notícia publicada ainda.')
  } else {
    for (const m of midias) {
      lines.push(`- **${m.titulo}** — ${m.veiculo}${m.urlExterna ? ` — ${m.urlExterna}` : ''}`)
    }
  }

  return new NextResponse(lines.join('\n').trim(), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
