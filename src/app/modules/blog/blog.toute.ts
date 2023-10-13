import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { BlogController } from './blog.controller';

const router = express.Router();

router.post('/create', auth(ENUM_USER_ROLE.ADMIN), BlogController.insartIntoDB);
router.get('/', BlogController.getAllFromDB);
router.get('/:id', BlogController.getByIdFromDB);
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), BlogController.updateOneInDB);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  BlogController.deleteByIdFromDB
);

export const BlogRoutes = router;
