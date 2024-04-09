<script setup lang="ts">
import { useTransactionDataStore } from '@/stores/transactionData'

const transactionDataStore = useTransactionDataStore()
</script>

<template>
    <h1>Información de esta transacción {{ transactionDataStore.data[0].currentAmount }}</h1>
    <div v-for="item in transactionDataStore.data">
       <p>Usted aprobó un retiro por un total: ${{ item.currentAmount }} | Su saldo actual es de ${{ item.balance }}</p> 
    </div>
</template>

<style scoped>

</style>@/stores/transactionData