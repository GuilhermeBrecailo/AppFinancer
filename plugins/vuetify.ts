// plugins/vuetify.ts

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,

    theme: {
      defaultTheme: "light",
      themes: {
        light: {
          dark: false,
          colors: {
            background: "#F3F8F9",
            surface: "#FFFFFF",
            primary: "#10B981", // verde estilo FinanceApp
            error: "#EF4444",
            success: "#10B981",
          },
        },
      },
    },
  });

  app.vueApp.use(vuetify);
});
