import { Request, Response } from 'express';
import { ErrorService, UserCreatedI, UserDataI } from '../../../src/domain/domain';
import UserService from '../services/User';
import { sign } from 'jsonwebtoken';
import * as fs from 'fs';

const key = fs.readFileSync('jwt.evation.key', 'utf-8');

class UserController {

  static async addUser (req: Request, res: Response) {
    try {
      const { body }  = req;
      const user = await UserService.addUser(body);
      return res.status(201).json(user);

    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error '});
    }
  }

  static async searchUser (req: Request, res: Response) {
    try {
      const { search } = req.query;
      const users = await UserService.getUsers(search as string);
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error '});
    }
  }

  static generateToken (user: UserDataI) {
    const { id, name, email, role } = user;
    const token = sign({ id, name, email, role }, key);
    return token;
  }

  static async loginUser (req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      
      const user = await UserService.userLogin(email, password);
      
      const { message }= user as ErrorService

      if(message) return res.status(404).json(message);

      const { id, name, role } = user as UserCreatedI;
      
      const token = sign({ id, name, email, role }, key);
      
      return res.status(200).json({ ...user, token }) 
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error '});
    }
  }

  static async editUser (req: Request, res: Response) {
    try {
      const {id, coins } = req.body;

      const user = await UserService.editUser(Number(id), coins);

      const { message }= user as ErrorService

      if(message) return res.status(404).json(message);

      return res.status(200).json(user)

    } catch (error) {
      
      return res.status(500).json({ message: 'Internal Server Error '});
    }
  }
}

export default UserController;