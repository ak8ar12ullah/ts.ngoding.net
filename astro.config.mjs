// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://ts.ngoding.net",
  base: "/",
  integrations: [
    starlight({
      title: "TypeScript Journal",
      components: {
        // Menimpa komponen Footer bawaan dengan milik kita
        Footer: "./src/components/FooterWrapper.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ak8ar12ullah",
        },
      ],
      sidebar: [
        {
          label: "Introduction",
          autogenerate: { directory: "Introduction" },
        },
        {
          label: "Types",
          autogenerate: { directory: "Types" },
        },
      ],
    }),
    react(),
  ],
});
