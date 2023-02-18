import { createRouter, createWebHistory } from "vue-router";
import Landing from "@/pages/Landing.vue";
import Dashboard from "@/pages/Dashboard-page.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
  ],
});

export default router;
