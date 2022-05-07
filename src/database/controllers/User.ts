import { Request, Response } from 'express';
import { ErrorService, UserDataI } from '../../../src/domain/domain';
import UserService from '../services/User';
import { sign } from 'jsonwebtoken';
import * as fs from 'fs';

const key = fs.readFileSync('./jwt.evaluation.key', 'utf-8');

class UserController {

  static async searchUser(req: Request, res: Response) {
    try {
      const { search } = req.query;
      const users = await UserService.getUsers(search as string);
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static generateToken(user: UserDataI) {
    const { id, name, email, role } = user;
    const token = sign({ id, name, email, role }, key);
    return token;
  }

  static async loginUser(req: Request, res: Response) {
    try {
      const { email, password } = req.params;
      const user = await UserService.userLogin(email, password);
      const { error: { message } }= user as ErrorService

      if(message) return res.status(404).json(message);
      
      const token = this.generateToken(user as UserDataI)
      return { ...user, token }
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default UserController;