import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomePage.vue"),
  },
  {
    path: "/plans",
    name: "Plans",
    component: () => import("../views/PlansPage.vue"),
  },
  {
    path: "/coverage",
    name: "Coverage",
    component: () => import("../views/CoveragePage.vue"),
  },
  {
    path: "/support",
    name: "Support",
    component: () => import("../views/SupportPage.vue"),
  },
  {
    path: "/reviews",
    name: "Reviews",
    component: () => import("../views/ReviewsPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: "smooth" };
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
