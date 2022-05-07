import * as express from 'express';
import ValidateUser from '../../src/database/middlewares/User/userValidate';
import UserController from '../../src/database/controllers/User';

const UserRouter = express.Router();

UserRouter
  .get('/', UserController.searchUser)
  .use(ValidateUser.validateLogin)
  .post('/login', UserController.loginUser)
  .use(ValidateUser.validateUserFields)
  .post('/', UserController.addUser)

export default UserRouter;