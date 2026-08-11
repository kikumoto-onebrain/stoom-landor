type PortableTextMarkDef = { _key: string; _type: string; href?: string }
type PortableTextSpan = { _type: 'span'; text: string; marks?: string[] }
type PortableTextBlock = {
  _type: string
  style?: string
  listItem?: 'bullet' | 'number'
  children?: PortableTextSpan[]
  markDefs?: PortableTextMarkDef[]
  asset?: { url: string }
}

function serializeSpan(span: PortableTextSpan, markDefs: PortableTextMarkDef[]): string {
  let text = span.text
  for (const mark of span.marks ?? []) {
    const linkDef = markDefs.find(d => d._key === mark && d._type === 'link')
    if (linkDef?.href) text = `[${text}](${linkDef.href})`
    else if (mark === 'strong') text = `**${text}**`
    else if (mark === 'em') text = `_${text}_`
    else if (mark === 'code') text = `\`${text}\``
  }
  return text
}

export function portableTextToMarkdown(blocks: PortableTextBlock[] = []): string {
  const lines: string[] = []
  let listBuffer: { type: 'bullet' | 'number'; text: string }[] = []

  const flushList = () => {
    if (listBuffer.length === 0) return
    listBuffer.forEach((item, i) => {
      lines.push(item.type === 'number' ? `${i + 1}. ${item.text}` : `- ${item.text}`)
    })
    lines.push('')
    listBuffer = []
  }

  for (const block of blocks) {
    if (block._type === 'image' && block.asset?.url) {
      flushList()
      lines.push(`![](${block.asset.url})`, '')
      continue
    }
    if (block._type !== 'block' || !block.children) continue

    const text = block.children.map(span => serializeSpan(span, block.markDefs ?? [])).join('')

    if (block.listItem) {
      listBuffer.push({ type: block.listItem, text })
      continue
    }
    flushList()

    switch (block.style) {
      case 'h1': lines.push(`# ${text}`, ''); break
      case 'h2': lines.push(`## ${text}`, ''); break
      case 'h3': lines.push(`### ${text}`, ''); break
      case 'h4': lines.push(`#### ${text}`, ''); break
      case 'blockquote': lines.push(`> ${text}`, ''); break
      default: lines.push(text, '')
    }
  }
  flushList()
  return lines.join('\n').trim()
}
