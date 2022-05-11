import { ProductI } from "../../../src/domain/domain";
import Product from "../models/Product";


class ProductService {

  static async addProduct(dataProduct: ProductI):Promise<Product> {
    const { name, price, urlImage } = dataProduct;
    const product = await Product.create({
      name,
      price,
      urlImage,
    })
    return product;
  }
}

export default ProductService;