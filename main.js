import Vue from "vue";
import App from "./App.vue";
import { router } from "./routes/index.js";
import { store } from "./store/index.js";
import vuetify from "./plugins/vuetify";
import "expose-loader?$!expose-loader?jQuery!jquery";
import VueMq from "vue-mq";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  vuetify,
  store
}).$mount("#app");

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity
  }
});
