<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useTransactionsStore } from '@/stores/transactions'

const transactionsStore = useTransactionsStore()
const route = useRoute()

const transcationId = <string> route.params.id
const transaction = transactionsStore.getTransaction(transcationId)
</script>

<template>
  <h1>Información de esta transacción {{ transaction?.amount }}</h1>
  <h2>Fecha: {{ transaction?.creationTime }}</h2>
  <p>
    Usted aprobó un {{ transaction?.type === 'deposit' ? 'deposito' : 'retiro' }} 
    por un total: {{ transaction?.type === 'deposit' ? '+' : '-' }}${{ transaction?.amount }} 
    | Su saldo actual es de ${{ transaction?.currentBalance }}</p>
</template>
