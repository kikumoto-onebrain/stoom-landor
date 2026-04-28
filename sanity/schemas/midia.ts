import { defineType } from 'sanity'

export default defineType({
  name: 'midia',
  title: 'Stoom na Mídia',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título da notícia',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'veiculo',
      title: 'Veículo',
      type: 'string',
      description: 'Nome do portal ou publicação (ex: Infor Channel, Mercado & Consumo)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'urlExterna',
      title: 'URL da notícia',
      type: 'url',
      description: 'Link para a notícia no veículo original',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'imagem',
      title: 'Imagem de capa',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'dataPublicacao',
      title: 'Data de publicação',
      type: 'date',
      options: { dateFormat: 'DD/MM/YYYY' },
    },
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
  ] as any[],
  preview: {
    select: { title: 'titulo', veiculo: 'veiculo', status: 'status', media: 'imagem' },
    prepare({ title, veiculo, status, media }: any) {
      return {
        title: `${status === 'publicado' ? '✅' : '📝'} ${title}`,
        subtitle: veiculo,
        media,
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
