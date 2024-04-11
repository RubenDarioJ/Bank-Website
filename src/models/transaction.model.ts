import type { Transaction } from '@/types/transaction.type'

export default class TransactionModel implements Transaction {
  id: string;
  amount: number;
  currentBalance: number;
  creationTime: string;
  type: 'deposit' | 'withdraw';

  constructor(transaction: Transaction, balance: number) {
    this.id = crypto.randomUUID();
    this.amount = transaction.amount;
    this.creationTime = this.currentDate();
    this.type = transaction.type;
    this.currentBalance = balance;
  }

  currentDate(): string {
    const date = new Date();

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    return formattedDate;
  }
}
