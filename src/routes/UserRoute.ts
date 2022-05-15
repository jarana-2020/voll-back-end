import * as express from 'express';
import ValidateUser from '../database/middlewares/User/userValidate';
import UserController from '../database/controllers/User';
import { ValidateToken } from '../database/middlewares/Token/validateToken';

const UserRouter = express.Router();

UserRouter
  .put('/', 
    ValidateToken.checkToken, 
    ValidateUser.validateCoinsAndId, 
    UserController.editUser)
  .get('/', ValidateToken.checkToken, UserController.searchUser)
  .use(ValidateUser.validateLogin)
  .post('/login', UserController.loginUser)
  .use(ValidateUser.validateUserFields)
  .post('/', UserController.addUser)

export default UserRouter;