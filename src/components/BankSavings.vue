<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useTransactionDataStore } from '@/stores/transactionData'

const transactionDataStore = useTransactionDataStore()
</script>

<template>
  <h1>Su saldo actual es de: ${{ transactionDataStore.data[0].savings }}</h1>
  <button @click="transactionDataStore.deposit"
  :disabled="transactionDataStore.data[0].savings >= 50">Depositar</button>

  <button @click="transactionDataStore.withdraw"
  :disabled="transactionDataStore.data[0].savings <= 0">Retirar</button>
<div v-for="item in transactionDataStore.data">
  <ul>
    <li>
    <span v-if="item.currentAmount >= 0">
      Usted ha depositado ${{ item.currentAmount }} | Saldo actual {{ item.balance }}  </span>
    <span v-else>
      Usted ha retirado ${{ item.currentAmount }} | Saldo actual {{ item.balance }} </span>
    <RouterLink :to="`/info/${item.id}`">
    <p>Ver mas información</p>
   </RouterLink>
    </li>
  </ul>
</div>

</template>
<style scoped>
.savings {
  border: 5px solid;
}

button {
  cursor: pointer;
  background-color: orange;
  border-radius: 12px;
  color: #000;
  cursor: pointer;
  font-weight: bold;
  padding: 5px 10px;
  text-align: center;
  box-sizing: border-box;
  border: 0;
  font-size: 16px;
}

button:disabled,
button[disabled]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #515151;
}

li {
  list-style-type: none;
}

</style>@/stores/transactionData