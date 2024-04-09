import { createRouter, createWebHistory } from 'vue-router'
import Savings from '@/components/BankSavings.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Savings
    },
    {
      path: '/info/:id',
      name: 'info',
      component: () => import('@/views/TransactionInfo.vue')
    },

  ]
})

export default router
