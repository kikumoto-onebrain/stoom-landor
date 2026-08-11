import { NextResponse } from 'next/server'

const SITE_URL = 'https://stoom.com.br'

export function GET() {
  const body = `User-agent: *
Allow: /
Disallow: /studio-content
Content-Signal: ai-train=no, search=yes, ai-input=yes

Sitemap: ${SITE_URL}/sitemap.xml
`

  return new NextResponse(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
