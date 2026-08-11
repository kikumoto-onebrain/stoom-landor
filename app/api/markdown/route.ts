import { NextResponse } from 'next/server'
import { homeMarkdown } from '@/lib/markdown-content'

export function GET() {
  return new NextResponse(homeMarkdown(), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
