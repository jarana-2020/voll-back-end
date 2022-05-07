import * as express from 'express';
import UserController from '../../src/database/controllers/User';

const UserRouter = express.Router();

UserRouter
  .get('/', UserController.searchUser)
  .post('/login',UserController.loginUser)

export default UserRouter;