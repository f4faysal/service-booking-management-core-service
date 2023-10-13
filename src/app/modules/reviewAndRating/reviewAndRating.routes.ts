import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { ReviewAndRatingController } from './reviewAndRating.controller';

const router = express.Router();

router.post(
  '/create',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  ReviewAndRatingController.insertIntoDB
);

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN),
  ReviewAndRatingController.getAllFromDB
);
router.get('/:id', ReviewAndRatingController.getByIdFromDB);

export const ReviewAndRatingRoutes = router;
