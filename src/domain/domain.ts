

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