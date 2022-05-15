import { Request, Response, NextFunction } from "express";

export default class ValidateProduct {
  static validateProduct(req: Request, res: Response, next: NextFunction) {
   try {
    const { name, price, urlImage } = req.body;
    
    if(!name || !price || !urlImage) {
      return res.status(401).json({ message: 'All fields must be filled' })
    }

    next();
   } catch (error) {
      res.status(401).json({ message: 'Invalid token' });
   }

  }
}