import * as express from 'express';
import ValidateUser from '../../src/database/middlewares/User/userValidate';
import UserController from '../../src/database/controllers/User';
import { ValidateToken } from '../../src/database/middlewares/Token/validateToken';

const UserRouter = express.Router();

UserRouter
  .put('/', ValidateToken.checkToken, UserController.editUser)
  .get('/', ValidateToken.checkToken, UserController.searchUser)
  .use(ValidateUser.validateLogin)
  .post('/login', UserController.loginUser)
  .use(ValidateUser.validateUserFields)
  .post('/', UserController.addUser)

export default UserRouter;