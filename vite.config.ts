import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    sveltekit(),
    purgeCss({
      safelist: {
        greedy: [/^hljs-/], // any selectors that begin with "hljs-" will not be purged
      },
    }),
  ],
  server: {
    host: true, // Listen on all local IPs
    // Optionally specify a port here if needed, for example:
    // port: 5173,
  },
  ssr: {
    noExternal: ['tsparticles', '@tsparticles/slim', '@tsparticles/engine', '@tsparticles/svelte'] // add all tsparticles libraries here, they're not made for SSR, they're client only
  }
});
