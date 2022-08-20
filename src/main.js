import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import animate from "animate.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(animate);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
