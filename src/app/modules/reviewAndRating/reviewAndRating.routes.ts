import express from 'express';
import { ReviewAndRatingController } from './reviewAndRating.controller';

const router = express.Router();

router.post('/create', ReviewAndRatingController.insertIntoDB);

export const ReviewAndRatingRoutes = router;
