import { NextResponse } from 'next/server'
import { smartLockerMarkdown } from '@/lib/markdown-content'

export function GET() {
  return new NextResponse(smartLockerMarkdown(), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
