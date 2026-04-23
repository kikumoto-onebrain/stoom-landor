import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'lyajz0yy',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

export interface Categoria {
  _id: string
  titulo: string
  slug: { current: string }
}

export interface Conteudo {
  _id: string
  titulo: string
  slug: { current: string }
  dataPublicacao: string
  palavrasChave?: string[]
  descricao?: string
  heroImage?: { asset: { url: string }; hotspot?: unknown }
  categoria?: Categoria
  corpo?: unknown[]
  status: string
}

export async function getCategorias(): Promise<Categoria[]> {
  return client.fetch(`*[_type == "categoria"] | order(titulo asc) { _id, titulo, slug }`)
}

export async function getConteudos(): Promise<Conteudo[]> {
  return client.fetch(`
    *[_type == "conteudo" && status == "publicado"] | order(dataPublicacao desc) {
      _id, titulo, slug, dataPublicacao, palavrasChave,
      "heroImage": heroImage { asset->{ url }, hotspot },
      "categoria": categoria->{ _id, titulo, slug }
    }
  `)
}

export async function getConteudo(slug: string): Promise<Conteudo | null> {
  return client.fetch(
    `*[_type == "conteudo" && slug.current == $slug][0] {
      _id, titulo, slug, dataPublicacao, status, descricao, palavrasChave,
      "heroImage": heroImage { asset->{ url }, hotspot },
      "categoria": categoria->{ _id, titulo, slug },
      corpo[] { ..., _type == "image" => { ..., asset->{ url } } }
    }`,
    { slug }
  )
}
