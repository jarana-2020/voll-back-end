import { DataTypes, Model, Sequelize } from "sequelize/types";
import { SaleDataI } from "../../../src/domain/domain";
import db from '.';


export default class Sale extends Model implements SaleDataI {

  id: number;

  userId: number;

  totalCoins: number;

  saleDate: Date;

  status: string;
}

Sale.init({
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  userId: {
    allowNull: false,
    field: 'user_id',
    type: DataTypes.INTEGER,
  },
  totalCoins: {
    allowNull: false,
    field: 'total_coins',
    type: DataTypes.INTEGER,
  },
  saleDate: {
    allowNull: false,
    field: 'sale_date',
    type: DataTypes.DATE,
    defaultValue: Sequelize.fn('NOW'),
  },
  status: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'in-progress',
  }
},{
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'sale',
  tableName: 'sales',
})