// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// import defaults from "./vuetify/defaults";
// import { themes } from "./vuetify/theme";
const defaults = {};
const themes = {};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    defaults,
    theme: {
      defaultTheme: "light",
      themes,
    },
  });
  app.vueApp.use(vuetify);
});
