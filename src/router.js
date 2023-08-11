import { createRouter, createWebHistory } from 'vue-router';
// TODO: onBeforeUpdated, onUpdated реакция на обновление
const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: () => import ('./pages/main-page/MainPage.vue')

  },
  {
    path: '/catalog/:slug',
    name: 'Catalog',
    component: () => import ('./pages/catalog/Catalog.vue'),
  },
    {
    path: '/catalog',
    name: 'redirectOn',
    redirect: '/catalog/bad'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
