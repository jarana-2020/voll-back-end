import { DataTypes, Model } from "sequelize";
import { SalesProductI } from "../../../src/domain/domain";
import db from '.';
import Product from "./Product";
import Sale from "./Sale";

export default class SaleProduct extends Model implements SalesProductI {

  productId: number;

  saleId: number;

  quantity: number;
}

SaleProduct.init({
  productId: {
    allowNull: false,
    primaryKey: true,
    field: 'product_id',
    type: DataTypes.INTEGER,
  },
  saleId: {
    allowNull: false,
    primaryKey: true,
    field: 'sale_id',
    type: DataTypes.INTEGER,
  },
  quantity: {
    allowNull: false,
    type: DataTypes.INTEGER,
  }

},{
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'saleProduct',
  tableName: 'salesProducts',
})

Product.belongsToMany(Sale, { through: 'SaleProduct' });
Sale.belongsToMany(Product, { through: 'SaleProduct' })