import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'stoom',
  title: 'Stoom — CMS',
  projectId: 'lyajz0yy',
  dataset: 'production',
  apiVersion: '2024-01-01',
  basePath: '/studio-content',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
