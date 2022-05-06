

export type Indexable = {
  id: number,
}

export interface UserDataI extends Indexable  {
  name: string,
  email: string,
  passsword: string,
  coins: number,
  role: string,
}

export interface SaleDataI extends Indexable {
  userId: number,
  totalCoins: number,
  saleDate: Date,
  status: string,
}