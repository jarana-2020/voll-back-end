import User from "../models/User";
import { Op } from 'sequelize';
import md5 = require("md5");
import { ErrorService } from "../../../src/domain/domain";


class UserService {
  
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

  static async userLogin( userEmail: string, userPassword: string): Promise<User | ErrorService > {
    const hash = md5(userPassword);
    const user = await User.findOne({
      where: { email: userEmail }
    })
    
    if(!user) return { message: 'User Not Found' }

    const { password } = user;

    if(password !== hash) return {  message: 'Invalid Password'  }

    return user;
  }
}

export default UserService;