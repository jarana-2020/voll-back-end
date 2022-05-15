import { UserCreatedI, UserDataI } from "../domain/domain";

export const userData: UserDataI[] = [
  {
    id: 1,
    name: 'Julio',
    email:'teste@gmail.com',
    coins: 0,
    password: 'e10adc3949ba59abbe56e057f20f883e',
    role: 'user'

  },
  {
    id: 2,
    name: 'Joao',
    email:'teste2@gmail.com',
    coins: 5,
    password: 'fcea920f7412b5da7be0cf42b8c93759',
    role: 'user'

  },
] 



export const userCreated: UserCreatedI = {
  id: 1,
  name: 'Julio',
  email:'teste@gmail.com',
  coins: 0,
  role: 'user'
};

export const userLogin = {
  email: 'julio@gmail.com',
  password: '123456'
}

export const tokenUser = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1bGlvIiwiZW1haWwiOiJqdWxpb0BnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTY1MjYyMjIyNH0.LEtYPXHJ02tgyewAGh8hhrRh2EwQXrLMHMpBKlgtiVc'
export const tokenAdmin = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IkpvYW8iLCJlbWFpbCI6ImpvYW9AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjUyNjIyODI1fQ.yDQZLwuFz37kc8GKVqQ-nCBEcWzgQif2fZ0qztsVSiA'