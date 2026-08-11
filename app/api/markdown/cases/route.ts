import { NextResponse } from 'next/server'
import { getCases } from '@/lib/sanity'

export async function GET() {
  const cases = await getCases()

  const lines = [
    '# Cases de Sucesso | Stoom',
    '',
    '> Alternate markdown representation for AI agents. Human-facing page: https://stoom.com.br/cases',
    '',
    '## Cases',
    '',
    'Conheça os projetos e resultados que a Stoom entregou para empresas líderes do mercado.',
    '',
  ]

  if (cases.length === 0) {
    lines.push('Nenhum case publicado ainda.')
  } else {
    for (const c of cases) {
      lines.push(`## [${c.titulo}](/cases/${c.slug.current})`)
      if (c.empresa) lines.push(`Empresa: ${c.empresa}`)
      if (c.segmento) lines.push(`Segmento: ${c.segmento}`)
      if (c.descricaoCurta) lines.push('', c.descricaoCurta)
      lines.push('')
    }
  }

  return new NextResponse(lines.join('\n').trim(), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
