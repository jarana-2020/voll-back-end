import * as express from 'express';
import { upload } from '../../src/helper/upload';
import ProductController from '../../src/database/controllers/Product';
import ValidateProduct from '../../src/database/middlewares/Products/validateProduct';

const ProductRouter = express.Router();

ProductRouter
  .use(upload.single('image'))
  .use(ValidateProduct.validateProduct)
  .post('/',ProductController.addProduct)

  export default ProductRouter;