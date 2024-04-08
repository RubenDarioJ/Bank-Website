import { defineStore } from 'pinia'
import type { Transaction } from '@/types/transaction.type'
export const useTransactionDataStore = defineStore('transactionData', {
  state: () => ({
    data: <Transaction[]> [
      {
        savings: 0,
        amount: 10,
      },
    ],
    counter: 1,
  }),
 actions: {
    deposit() {
      this.data[0].savings += this.data[0].amount;
      this.data.push({
        id: this.generateUniqueId(),
        currentAmount: this.data[0].amount,
        balance: this.data[0].savings,
      });
    },
    withdraw() {
      this.data[0].savings -= this.data[0].amount;
      this.data.push({
        id: this.generateUniqueId(),
        currentAmount: -this.data[0].amount,
        balance: this.data[0].savings,
      });
    },
    generateUniqueId() {
      const currentDate = new Date();
      let counter = 1;
      const uniqueId = `M-${currentDate.getTime()}-${counter}`;
      counter++;

      return uniqueId;
    }
  },
})
