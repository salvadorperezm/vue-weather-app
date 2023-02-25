import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faSliders,
  faSun,
  faTemperatureHalf,
} from "@fortawesome/free-solid-svg-icons";

library.add(faSliders, faSun, faTemperatureHalf);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
