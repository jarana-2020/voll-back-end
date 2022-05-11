import * as express from 'express';
import ProductController from '../../src/database/controllers/Product';
import ValidateProduct from '../../src/database/middlewares/Products/validateProduct';

const ProductRouter = express.Router();

ProductRouter
  .use(ValidateProduct.validateProduct)
  .post('/',ProductController.addProduct)