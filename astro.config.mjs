import { defineConfig } from 'astro/config';

// Quando tiver um domínio, troque o endereço abaixo (ex.: https://brunabarros.com)
export default defineConfig({
  site: 'https://brunabarroz.vercel.app',
  trailingSlash: 'ignore',
  // Endereços antigos levam para as páginas novas (as áreas antigas estão guardadas em /arquivo).
  redirects: {
    '/carreira-internacional': '/direito-na-gringa/',
    '/carreira-internacional/direito-na-gringa': '/direito-na-gringa/',
    '/viagens': '/compras/',
    '/viagens/equipamentos': '/compras/',
    '/compras/set-up': '/compras/set-up-do-home-office/',
  },
});
