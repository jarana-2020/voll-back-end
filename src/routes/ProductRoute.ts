import * as express from 'express';
import { upload } from '../helper/upload';
import ProductController from '../database/controllers/Product';
import ValidateProduct from '../database/middlewares/Products/validateProduct';
import { ValidateToken } from '../database/middlewares/Token/validateToken';

const ProductRouter = express.Router();

ProductRouter
  .get('/', ProductController.getAll)
  .use(upload.single('image'))
  .use(ValidateToken.checkToken)
  .use(ValidateProduct.validateProduct)
  .post('/',ProductController.addProduct)

  export default ProductRouter;