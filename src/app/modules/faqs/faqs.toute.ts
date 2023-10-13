import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { FaqsController } from './faqs.controller';

const router = express.Router();

router.post('/create', auth(ENUM_USER_ROLE.ADMIN), FaqsController.insartIntoDB);
router.get('/', FaqsController.getAllFromDB);
router.get('/:id', FaqsController.getByIdFromDB);
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), FaqsController.updateOneInDB);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  FaqsController.deleteByIdFromDB
);

export const FaqsRoutes = router;
