<script setup lang="ts">
import { useBankDataStore } from '@/stores/bankData'

const bankDataStore = useBankDataStore()
</script>

<template>
    <h1>Informacion de esta transacción {{ bankDataStore.data[0].currentAmount }}</h1>
    <div v-for="item in bankDataStore.data">
       <p>Usted aprobó un retiro por un total: ${{ item.currentAmount }} | Su saldo actual es de ${{ item.balance }}</p> 
    </div>
</template>

<style scoped>

</style>