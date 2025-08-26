import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import { isFeatureEnabled } from "../config/featureFlags.js";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

// Adiciona a rota do blog apenas se a feature estiver ativa
if (isFeatureEnabled('BLOG_ENABLED')) {
  routes.push({
    path: "/blog",
    name: "Blog",
    component: Blog,
  });
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// Middleware para verificar feature flags
router.beforeEach((to, from, next) => {
  // Se alguém tentar acessar /blog e a feature estiver desativada
  if (to.path === '/blog' && !isFeatureEnabled('BLOG_ENABLED')) {
    // Redireciona para a home
    next('/');
  } else {
    next();
  }
});

export default router;
