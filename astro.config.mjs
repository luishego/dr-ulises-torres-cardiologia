import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Sitio de una sola página, 100% estático. Se despliega subiendo `dist/` a
// Cloudflare Pages con wrangler (`npm run deploy`), así que no hace falta
// adaptador: el de Cloudflare solo aporta SSR y aquí no hay nada dinámico.
export default defineConfig({
  site: 'https://www.drulisestorres.com',
  output: 'static',
  compressHTML: true,
  // El robots.txt anuncia el sitemap; esta integración es quien lo genera.
  integrations: [sitemap()],
  build: {
    // Un solo CSS en vez de varios ficheros: el total ronda los 25 KB y
    // ahorra peticiones en la primera carga, que es la que importa.
    inlineStylesheets: 'always',
  },
});
