import * as express from 'express';
import { upload } from '../../src/helper/upload';
import ProductController from '../../src/database/controllers/Product';
import ValidateProduct from '../../src/database/middlewares/Products/validateProduct';

const ProductRouter = express.Router();

ProductRouter
  .use(ValidateProduct.validateProduct)
  .post('/',upload.single('image'), ProductController.addProduct)

  export default ProductRouter;