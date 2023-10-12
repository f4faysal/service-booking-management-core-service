import express from 'express';

import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { UserController } from './user.controller';

const router = express.Router();

router.get(
  '/user/all',
  auth(ENUM_USER_ROLE.ADMIN),
  UserController.getAllFromDB
);
router.get(
  '/user/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  UserController.getByIdFromDB
);
router.patch(
  '/user/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  UserController.updateIntoDB
);
router.delete(
  '/user/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  UserController.deleteFromDB
);
router.get(
  '/profile',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER, ENUM_USER_ROLE.SUPER_ADMIN),
  UserController.getProfile
);

export const UserRouter = router;
