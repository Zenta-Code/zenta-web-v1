import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme';
import {codeInput} from '@sanity/code-input'
import { getDefaultDocumentNode } from './structure';
import { colorInput } from "@sanity/color-input";
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
export default defineConfig({
  basePath: '/studio',
  name: 'Tensai_Mono_Content_Studio',
  title: 'Tensai Mono Content Studio',
  projectId,
  dataset,

  plugins: [deskTool({
    defaultDocumentNode:getDefaultDocumentNode
  }), visionTool(), colorInput(), codeInput(),{
    "name": "part:@sanity/form-builder/input/latex",
    "path": "./src/components/LatexInput.js"
  }],

  schema: {
    types: schemaTypes,
  },studio: {

  },
  theme: myTheme
})
