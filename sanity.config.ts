import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { myTheme } from '@/theme'
import StudioNavBar from '@/components/StudioNavBar'
import Logo from './components/Logo'
import { getDefaulDocumentNode } from './styles/structure'
import { schemaTypes } from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET_ID!

export default defineConfig({
  basePath: '/studio',
  name: 'SANITY_NAME',
  title: 'SANITY_TITLE____12',
  projectId,
  dataset,
  theme: myTheme,
  plugins: [deskTool({
    defaultDocumentNode: getDefaulDocumentNode
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio:{
    components:{
      logo:Logo,
      navbar:StudioNavBar
    }
  }
})
