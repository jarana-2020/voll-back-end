import { Request, Response } from 'express';
import ProductService from '../services/Product';

class ProductController {
  static async addProduct(req: Request, res: Response) {
    try {
      const { body } = req;
      
      const product = await ProductService.addProduct(body);
      
      return res.status(201).json(product);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error '});
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const product = await ProductService.getAll();
      
      return res.status(201).json(product);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error '});
    }
  }
}

export default ProductController;