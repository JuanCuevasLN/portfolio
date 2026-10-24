import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build
export default defineConfig({
  integrations: [icon()], // Regresa a la integración limpia
});
