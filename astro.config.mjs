// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import collectionSearch from 'astro-collection-search';

// https://astro.build/config
export default defineConfig({

  site: 'https://sdllc.github.io',
  base: 'webdev-24',
  outDir: 'docs',

  integrations: [mdx(), collectionSearch({
    fields: ['title', 'tags', 'description', 'keywords'],
  })]
});