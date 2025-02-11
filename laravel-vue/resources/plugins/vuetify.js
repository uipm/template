// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const vuetify = createVuetify({
    components,
    directives,
});

export default vuetify;
