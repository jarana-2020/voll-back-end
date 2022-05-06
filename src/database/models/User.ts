import { DataTypes, Model } from "sequelize";
import { UserDataI } from "../../../src/domain/domain";
import db from '.';

export default class User extends Model implements UserDataI {
  id: number;

  name: string;

  email: string;

  passsword: string;

  coins: number;

  role: string;
}

User.init({
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
  email: {
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  coins: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'user',
  tableName: 'users'
})