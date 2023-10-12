import express from 'express';

import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { UserController } from './user.controller';

const router = express.Router();

router.post('/register', UserController.registerUSer);
router.post(
  '/superadmin/users',
  auth(ENUM_USER_ROLE.SUPER_ADMIN),
  UserController.addNewAdmin
);
router.post(
  '/admin/users',
  auth(ENUM_USER_ROLE.ADMIN),
  UserController.addNewUser
);
router.post('/login', UserController.loginUser);

export const AuthRouter = router;
