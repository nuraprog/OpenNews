import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("../views/Main.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Search/Search.vue"),
  },

  {
    path: "/category/:id",
    component: () => import("../views/categories.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
