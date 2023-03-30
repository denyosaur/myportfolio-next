import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/schemas';
import { sanityTheme } from './sanityTheme';

import { NavbarIcon } from './assets/icons';
import { StudioNavbar } from './src/components/StudioNavbar';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: "/studio",
  name: 'default',
  title: 'myportfolio-sanity',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: NavbarIcon,
      navbar: StudioNavbar,
    }
  },
  theme: sanityTheme,
})
