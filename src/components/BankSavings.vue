<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useBankDataStore } from '@/stores/bankData'

const bankDataStore = useBankDataStore()
</script>

<template>
  <h1>Su saldo actual es de: ${{ bankDataStore.data[0].savings }}</h1>
  <button @click="bankDataStore.depositar"
  :disabled="bankDataStore.data[0].savings >= 50">Depositar</button>

  <button @click="bankDataStore.retirar"
  :disabled="bankDataStore.data[0].savings <= 0">Retirar</button>
<div v-for="item in bankDataStore.data">
  <ul>
    <!-- <li>Saldo actual: {{ item.saldo }} || Acabas de depositar {{ item.currentAmount }}</li> -->
    <li>
    <span v-if="item.currentAmount >= 0">Usted ha depositado $</span>
    <span v-else>Usted ha retirado $</span>
      {{ item.currentAmount }} | Saldo actual {{ item.balance }}
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

</style>