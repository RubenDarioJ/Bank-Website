import { defineStore } from 'pinia'
import type { Bank } from '@/types/bank.type.ts'
export const useBankDataStore = defineStore('bankData', {
  state: () => ({
    data: <Bank[]> [
      {
        savings: 0,
        amount: 10,
      },
    ],
    counter: 1,
  }),
 actions: {
    depositar() {
      this.data[0].savings += this.data[0].amount;
      this.data.push({
        id: this.generateUniqueId(),
        currentAmount: this.data[0].amount,
        balance: this.data[0].savings,
      });
    },
    retirar() {
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
