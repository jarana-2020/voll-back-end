

export type Indexable = {
  id: number,
}

export interface UserDataI extends Indexable  {
  name: string,
  email: string,
  password: string,
  coins: number,
  role: string,
}

export interface UserCreatedI extends Indexable {
  name: string,
  email: string,
  coins: number,
  role: string,
}

export interface SaleDataI extends Indexable {
  userId: number,
  totalCoins: number,
  saleDate: Date,
  status: string,
}

export interface ProductI extends Indexable {
  name: string,
  price: number,
  urlImage: File,
}

export interface SalesProductI {
  saleId: number,
  productId: number,
  quantity: number
}

export type ErrorService = {
   message: string 
}

// export interface ProductI  {
//   name: string,
//   price: number,
//   urlImage: string,
// }