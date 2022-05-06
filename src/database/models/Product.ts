import { DataTypes, Model } from "sequelize";
import { ProductI } from "../../../src/domain/domain";
import db from '.';

export default class Product extends Model implements ProductI {
  id: number;

  name: string;

  price: number;

  urlImage: string;
}

Product.init({
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  urlImage: {
    allowNull: false,
    field: 'url_image',
    type: DataTypes.STRING,
  },
  
},{
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'product',
  tableName: 'products',
})