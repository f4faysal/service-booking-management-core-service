import express from 'express';

import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { BookingsController } from './bookings.controller';

const router = express.Router();

router.get(
  '/users/all',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  BookingsController.getAllFromDB
);

export const BookingsRouter = router;
