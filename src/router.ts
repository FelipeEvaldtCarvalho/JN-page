import { createWebHistory, createRouter } from "vue-router";
import Home from "./modules/home/Home.vue";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      component: () => import("./modules/main/Main.vue"),
      children: [
        {
          path: "",
          name: "home",
          component: Home,
        },
      ],
    },
  ],
});

export default router;
