import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://divyanshuaggarwal.github.io",
  output: "static",
  integrations: [sitemap()],
});
