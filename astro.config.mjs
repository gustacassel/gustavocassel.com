import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'https://gustavocassel.com';

export default defineConfig({
  site,
  output: 'static',
  compressHTML: true,
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    syntaxHighlight: false,
  },
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'pt',
      locales: {
        pt: 'pt-BR',
        en: 'en-US',
      },
    },
    namespaces: {
      news: false,
      video: false,
      image: false,
    },
  })],
  security: {
    csp: true,
  },
  build: {
    format: 'directory',
  },
  vite: {
    server: {
      watch: {
        // O Visual Studio mantém arquivos da .vs travados enquanto está aberto.
        ignored: ['**/.vs/**'],
      },
    },
  },
});
