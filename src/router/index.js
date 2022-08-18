import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/admin/login",
  },
  {
    path: "/admin/login",
    name: "adminLogin",
    component: () => import("../views/adminLogin.vue"),
  },
  {
    path: "/admin/dashboard",
    name: "adminDashboard",
    component: () => import("../views/adminDashboard.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
