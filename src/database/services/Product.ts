import { ProductI } from "../../../src/domain/domain";
import Product from "../models/Product";


class ProductService {

  static async addProduct(dataProduct: ProductI):Promise<unknown> {
    const { name, price: cost, urlImage } = dataProduct;
    
      const product = await Product.create({
      name,
      price: Number(cost),
      urlImage: `http://localhost:3001/public/${urlImage}`
    })
      return product;
  }
}

export default ProductService;