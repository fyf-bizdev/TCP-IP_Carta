// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://fyf-bizdev.github.io',
  base: '/TCP-IP_Carta',
  integrations: [svelte(), tailwind()]
});