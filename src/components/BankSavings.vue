<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useTransactionsStore } from '@/stores/transactions'

const transactionsStore = useTransactionsStore()
</script>

<template>
  <div class="center">
    <h1>
      Su saldo actual es de:
      <span :class="transactionsStore.account.balance >= 1 ? 'positive' : ''">
        ${{ transactionsStore.account.balance }}
      </span>
    </h1>

    <div class="buttons-container my-4">
      <button
        @click="transactionsStore.addTransaction('deposit')"
        :disabled="transactionsStore.account.balance >= 50"
      >
        Depositar
      </button>

      <button
        @click="transactionsStore.addTransaction('withdraw')"
        :disabled="transactionsStore.account.balance <= 0"
      >
        Retirar
      </button>
    </div>

    <ul class="list-group shadow border" style="overflow-y: auto; max-height: 700px;">
      <li class="list-group-item" v-for="transaction in transactionsStore.data">
        <span>{{ transaction.type === 'deposit' ? '🟢' : '🔴' }}</span>
        <span>
          Usted ha {{ transaction.type === 'deposit' ? 'depositado' : 'retirado' }} ${{ transaction.amount }} | Saldo actual ${{ transaction.currentBalance }}
        </span>
        <div class="text-end">
          <RouterLink :to="`/info/${transaction.id}`">
            Ver más información
          </RouterLink>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .center {
    display: flex;
    flex-direction: column; /* Alineación vertical */
    justify-content: center;
    align-items: center;
  }
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

  .buttons-container {
    display: flex;
    justify-content: space-between;
    gap: 10px;
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

  .positive {
    color: rgb(12, 187, 12);
  }
</style>
