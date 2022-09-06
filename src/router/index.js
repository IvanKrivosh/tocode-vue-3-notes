import { createRouter, createWebHistory } from 'vue-router';
const ROOT_PATH = '/';
const routes = [
  {
    path: ROOT_PATH,
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "home" */ '../views/HomeView.vue'),
  },
  {
    path: `${ROOT_PATH}about`,
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    redirect: () => ROOT_PATH,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
