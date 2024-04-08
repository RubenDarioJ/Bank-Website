import { defineStore } from 'pinia'
import type { Bank } from '@/types/bank.type.ts'
export const useBankDataStore = defineStore('bankData', {
  state: () => ({
    data: <Bank[]> [
      {
        ahorros: 0,
        cantidad: 10,
      },
    ],
    counter: 1,
  }),
 actions: {
    depositar() {
      this.data[0].ahorros += this.data[0].cantidad;
      this.data.push({
        id: this.generateUniqueId(),
        monto: this.data[0].cantidad,
        saldo: this.data[0].ahorros,
      });
    },
    retirar() {
      this.data[0].ahorros -= this.data[0].cantidad;
      this.data.push({
        id: this.generateUniqueId(),
        monto: -this.data[0].cantidad,
        saldo: this.data[0].ahorros,
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
