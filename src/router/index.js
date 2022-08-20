import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/admin/login",
  },
  {
    path: "/admin/login",
    name: "admin-login",
    component: () => import("../views/AdminLogin.vue"),
  },
  {
    path: "/admin/dashboard",
    name: "admin-dashboard",
    component: () => import("../views/AdminDashboard.vue"),
    redirect: "/admin/dashboard/newest",
    children: [
      {
        path: "newest",
        name: "dashboard-newest",
        component: () => import("../components/DataList.vue"),
      },
      {
        path: "jobs",
        name: "dashboard-jobs",
        component: () => import("../components/DataList.vue"),
      },
      {
        path: "startup",
        name: "dashboard-startup",
        component: () => import("../components/DataList.vue"),
      },
      {
        path: "investment",
        name: "dashboard-investment",
        component: () => import("../components/DataList.vue"),
      },
      {
        path: "gamble",
        name: "dashboard-gamble",
        component: () => import("../components/DataList.vue"),
      },
    ],
  },
  {
    path: "/admin/option/new",
    name: "admin-option-new",
    component: () => import("../views/CreateOption.vue"),
  },
  {
    path: "/admin/option/:option_id",
    name: "admin-option-edit",
    component: () => import("../views/EditOption.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User.vue"),
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound,
  },
];

const router = new VueRouter({
  linkExactActiveClass: "active",
  routes,
});

export default router;
