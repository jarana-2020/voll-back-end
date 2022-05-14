import * as express from 'express';
import { upload } from '../../src/helper/upload';
import ProductController from '../../src/database/controllers/Product';
import ValidateProduct from '../../src/database/middlewares/Products/validateProduct';
import { ValidateToken } from '../../src/database/middlewares/Token/validateToken';

const ProductRouter = express.Router();

ProductRouter
  .get('/', ProductController.getAll)
  .use(upload.single('image'))
  .use(ValidateToken.checkToken)
  .use(ValidateProduct.validateProduct)
  .post('/',ProductController.addProduct)

  export default ProductRouter;