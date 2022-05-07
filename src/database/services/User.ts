import User from "../models/User";
import { Op } from 'sequelize';
import md5 = require("md5");
import { ErrorService, UserCreatedI, UserDataI } from "../../../src/domain/domain";


class UserService {

  static async addUser (dataUser: UserDataI):Promise<UserCreatedI> {
    const { name, email, password } = dataUser;
    const hash = md5(password);
    const user = await User.create({ name, email, password: hash });
    const { id, role, coins } = user
    return { id, name, email, role, coins }
  }
  
  static async getUsers (value: string): Promise<User[]> {
    const users = await User.findAll({
      where : {
        [Op.or] : [
          {
            name: {
              [Op.like]: `${ value }%`
            }
          },
          {
            email: {
              [Op.like]: `${ value }%`
            }
          }
        ]
      }
    });

    return users;
    
  }

  static async userLogin( userEmail: string, userPassword: string): Promise<UserCreatedI | ErrorService > {
    const hash = md5(userPassword);
    const user = await User.findOne({
      where: { email: userEmail }
    })
    
    if(!user) return { message: 'User Not Found' }

    const { password } = user;

    if(password !== hash) return {  message: 'Invalid Password'  }
    const { id, name, email, role, coins } = user;

    return { id, name, email, role, coins };
  }
}

export default UserService;