import { NextResponse } from 'next/server'
import { parceirosMarkdown } from '@/lib/markdown-content'

export function GET() {
  return new NextResponse(parceirosMarkdown(), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
