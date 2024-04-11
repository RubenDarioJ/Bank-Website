export interface Transaction {
  id: string;
  amount: number;
  currentBalance: number;
  creationTime: string;
  type: 'deposit' | 'withdraw';
}