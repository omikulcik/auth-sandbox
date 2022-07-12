import Vue from "vue";
import App from "./App.vue";
import Auth from "./Auth.vue";
import Restricted from "./Restricted.vue";
import VueRouter from "vue-router";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {
    path: "/auth",
    component: Auth,
  },
  {
    path: "/restricted",
    component: Restricted,
  },
];

const router = new VueRouter({ routes, mode: "history" });

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
