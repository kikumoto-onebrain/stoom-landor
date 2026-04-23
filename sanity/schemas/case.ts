import { defineType } from 'sanity'

export default defineType({
  name: 'case',
  title: 'Case de Sucesso',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'titulo', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'empresa',
      title: 'Empresa',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'segmento',
      title: 'Segmento',
      type: 'string',
      description: 'Ex: Varejo, Marketplace B2B, Pet Retail',
    },
    {
      name: 'logoEmpresa',
      title: 'Logo da Empresa',
      type: 'image',
      options: { hotspot: false },
    },
    {
      name: 'imagemCapa',
      title: 'Imagem de Capa',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'descricaoCurta',
      title: 'Descrição Curta',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.max(200),
      description: 'Exibida no card da listagem (máx. 200 caracteres)',
    },
    {
      name: 'corpo',
      title: 'Conteúdo',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Título H2', value: 'h2' },
            { title: 'Título H3', value: 'h3' },
            { title: 'Citação', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Negrito', value: 'strong' },
              { title: 'Itálico', value: 'em' },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
        {
          type: 'object',
          name: 'divisoria',
          title: 'Divisória',
          fields: [{ name: 'style', type: 'string', hidden: true, initialValue: 'hr' }],
          preview: { select: {}, prepare: () => ({ title: '— Divisória —' }) },
        },
      ],
    } as any,
    {
      name: 'resultados',
      title: 'Resultados / Métricas',
      type: 'array',
      description: 'Adicione métricas de destaque (ex: valor "85x", métrica "crescimento em receita")',
      of: [
        {
          type: 'object',
          name: 'resultado',
          fields: [
            { name: 'valor', title: 'Valor', type: 'string', description: 'Ex: 85x, 35%, 5x' },
            { name: 'metrica', title: 'Métrica', type: 'string', description: 'Ex: crescimento em receita online' },
          ],
          preview: {
            select: { valor: 'valor', metrica: 'metrica' },
            prepare: ({ valor, metrica }: any) => ({ title: valor, subtitle: metrica }),
          },
        },
      ],
    } as any,
    {
      name: 'depoimento',
      title: 'Depoimento',
      type: 'object',
      fields: [
        { name: 'texto', title: 'Texto', type: 'text', rows: 4 },
        { name: 'nome', title: 'Nome', type: 'string' },
        { name: 'cargo', title: 'Cargo', type: 'string' },
      ],
    } as any,
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: '✅ Publicado', value: 'publicado' },
          { title: '📝 Rascunho', value: 'rascunho' },
        ],
        layout: 'radio',
      },
      initialValue: 'publicado',
    },
    {
      name: 'dataPublicacao',
      title: 'Data de Publicação',
      type: 'datetime',
    },
  ] as any[],
  preview: {
    select: { title: 'empresa', status: 'status', segmento: 'segmento' },
    prepare({ title, status, segmento }: any) {
      return {
        title: `${status === 'publicado' ? '✅' : '📝'} ${title}`,
        subtitle: segmento,
      }
    },
  },
  orderings: [
    {
      title: 'Data de Publicação',
      name: 'dataPublicacaoDesc',
      by: [{ field: 'dataPublicacao', direction: 'desc' as const }],
    },
  ],
})
