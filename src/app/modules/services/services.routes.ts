import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { ServiceController } from './services.controller';

const router = express.Router();

router.post(
  '/create',
  auth(ENUM_USER_ROLE.ADMIN),
  ServiceController.insertIntoDB
);
router.get('/', ServiceController.getAllFromDB);
router.get('/:id', ServiceController.getByIdFromDB);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  ServiceController.updateIntoDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  ServiceController.deleteFromDB
);

export const ServicesRouter = router;
