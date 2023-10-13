import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { FeedbackController } from './feedback.controller';

const router = express.Router();

router.post('/create', FeedbackController.insartIntoDB);
router.get('/', auth(ENUM_USER_ROLE.ADMIN), FeedbackController.getAllFromDB);
router.get('/:id', FeedbackController.getByIdFromDB);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  FeedbackController.updateOneInDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  FeedbackController.deleteByIdFromDB
);

export const FeedbackRoutes = router;
