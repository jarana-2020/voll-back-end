import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import * as fs from 'fs';
import { UserDataI } from '../../../../src/domain/domain';

const key = fs.readFileSync('jwt.evation.key', 'utf-8');

export class ValidateToken {
  static checkToken(
    req: Request,
    res: Response, 
    next: NextFunction) {
      try {
        const { authorization } = req.headers;

        if(!authorization) {
          return res.status(401).json({ message: 'Token not found' })
        }
    
        const decodedToken = verify(authorization,key);
        const { role } = decodedToken as UserDataI;
    
        if(role !== 'admin') return res.status(401).json({ message: 'User Unauthorized' })
    
        next();
      } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
      }
  }
}