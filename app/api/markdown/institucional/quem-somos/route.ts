import { NextResponse } from 'next/server'
import { quemSomosMarkdown } from '@/lib/markdown-content'

export function GET() {
  return new NextResponse(quemSomosMarkdown(), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
