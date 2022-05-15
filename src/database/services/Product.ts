import { ProductI } from "../../../src/domain/domain";
import Product from "../models/Product";


class ProductService {

  static async addProduct(dataProduct: ProductI):Promise<unknown> {
    const { name, price: cost, urlImage } = dataProduct;
    
      const product = await Product.create({
      name,
      price: cost,
      urlImage: `http://localhost:3001/images/${urlImage}`
    })
      return product;
  }

  static async getAll():Promise<unknown> {
    
      const product = await Product.findAll()
      return product;
  }
}

export default ProductService;