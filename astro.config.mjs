import { defineConfig } from 'astro/config';

// Sitio de una sola página, 100% estático. Se despliega subiendo `dist/` a
// Cloudflare Pages con wrangler (`npm run deploy`), así que no hace falta
// adaptador: el de Cloudflare solo aporta SSR y aquí no hay nada dinámico.
export default defineConfig({
  site: 'https://mvp-validacion-cardiologia.pages.dev',
  output: 'static',
  compressHTML: true,
  build: {
    // Un solo CSS en vez de varios ficheros: el total ronda los 25 KB y
    // ahorra peticiones en la primera carga, que es la que importa.
    inlineStylesheets: 'always',
  },
});
