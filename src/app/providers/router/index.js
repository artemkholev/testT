import { routes } from './routes'
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  linkActiveClass: 'border-bottom',
  linkExactActiveClass: 'border-bottom_exact',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export { router };