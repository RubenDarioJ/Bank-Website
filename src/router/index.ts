import { createRouter, createWebHistory } from 'vue-router'
import Savings from '@/components/BankSavings.vue'
import Help from '@/views/Help.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/Card.vue')
    },
    {
      path: '/balance',
      name: 'balance',
      component: Savings
    },
    {
      path: '/info/:id',
      name: 'info',
      component: () => import('@/views/TransactionInfo.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('@/views/Help.vue')
    },
  ]
})

export default router
