import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateCurriculoView from '@/views/CreateCurriculoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/curriculos/novo',
      name: 'curriculos-novo',
      component: CreateCurriculoView
    },
  ],
})

export default router
