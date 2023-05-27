import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  build: {
    assets: "_bradn"
  },
  adapter: cloudflare()
});