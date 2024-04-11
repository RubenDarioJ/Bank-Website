import { defineStore } from 'pinia'
import type { Transaction } from '@/types/transaction.type'
import TransactionModel from '@/models/transaction.model'
import type { Account } from '@/types/account.type'

export const useTransactionsStore = defineStore('transactions', {
  state: () => ({
    account: <Account> {
      id: crypto.randomUUID(),
      balance: 0
    },
    data: <Transaction[]> [],
    fixedValue: 10
  }),
  actions: {
    addTransaction(type: string) {
      if (type === 'deposit') {
        this.account.balance += this.fixedValue
      } else if (type === 'withdraw') {
        this.account.balance -= this.fixedValue
      } else {
        return false
      }

      const transaction = new TransactionModel(<Transaction> {
        amount: this.fixedValue,
        type: type as 'deposit' | 'withdraw'
      }, this.account.balance)

      this.data.unshift(transaction)
    },
    getTransaction(id: string) {
      return this.data.find(transaction => transaction.id === id)
    }
    // deposit() {
    //   this.data[0].savings += this.data[0].amount;
    //   this.data.push({
    //     id: this.generateUniqueId(),
    //     currentAmount: this.data[0].amount,
    //     balance: this.data[0].savings,
    //   });
    // },
    // withdraw() {
    //   this.data[0].savings -= this.data[0].amount;
    //   this.data.push({
    //     id: this.generateUniqueId(),
    //     currentAmount: -this.data[0].amount,
    //     balance: this.data[0].savings,
    //   });
    // },
    // generateUniqueId() {
    //   const currentDate = new Date();
    //   let counter = 1;
    //   const uniqueId = `M-${currentDate.getTime()}-${counter}`;
    //   counter++;

    //   return uniqueId;
    // }
  },
})
