import { NextFunction, Request, Response } from 'express';
import { UserDataI } from '../../../domain/domain';
import { emailRegEx } from '../../../helper/helper';

export default class ValidateUser {

  static validateLogin (req: Request, res: Response, next: NextFunction) {
    const { email, password }: UserDataI = req.body;
    const isValidEmail = emailRegEx.test(email);

    if(!email || !password ) {
      return res.status(401).json({ message: 'All fields must be filled' })
    }

    if(!isValidEmail) {
      return res.status(401).json({ message: 'Invalid Email'})
    }

    if(password.length < 6) {
      return res.status(401).json({ message: 'Password must be at least 6 characters long' });
    }

    next();

  }

  static validateUserFields (req: Request, res: Response, next: NextFunction) {
    const { name } = req.body;

    if(!name) {
      return res.status(401).json({ message: 'All fields must be filled'})
    }

    

    next();
  }

  static validateCoinsAndId (req: Request, res: Response, next: NextFunction) {
    const { id, coins } = req.body;

    if(!coins || !id) {
      return res.status(401).json({ message: 'Coins and Id must be filled'})
    }

    

    next();
  }
}