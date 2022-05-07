import { Request, Response } from 'express';
import UserService from '../services/User';

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
}

export default UserController;