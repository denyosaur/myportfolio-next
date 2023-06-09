import { codeInput } from '@sanity/code-input';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { markdownSchema } from "sanity-plugin-markdown/next";
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/schemas';
import { sanityTheme } from './sanityTheme';

import NavbarIcon from './public/icons/NavbarIcon';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: "/studio",
  name: 'default',
  title: 'myportfolio-sanity',
  projectId,
  dataset,
  plugins: [
    codeInput(),
    deskTool(),
    markdownSchema(),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: NavbarIcon,
    }
  },
  theme: sanityTheme,
})
