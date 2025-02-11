import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    baseURL: "/trezo/",
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0",
        },
      ],
    },
  },
  css: [
    "@mdi/font/css/materialdesignicons.css",
    "swiper/css/bundle",
    "quill/dist/quill.snow.css",
    "remixicon/fonts/remixicon.css",
    "~/assets/scss/main.css",
    "~/assets/scss/style.scss",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  plugins: [
    "~/plugins/apexcharts.client.ts",
    "~/plugins/vue-quill.js",
    "~/plugins/popover.ts",
  ],
  modules: ["nuxt-swiper"],
  build: {
    transpile: ["vue3-apexcharts"],
  },
  components: true,
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.toLowerCase() === "script",
    },
  },
  nitro: {
    output: {
      dir: "dist",
      serverDir: "dist/server",
    },
  },
  compatibilityDate: "2025-01-27",
});
