import User from "../models/User";
import { Op } from 'sequelize';


class UserService {
  
  static async getUsers (value: string): Promise<User[]> {
    const result = await User.findAll({
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

    return result;
    
  }
}

export default UserService;