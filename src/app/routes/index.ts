import express from 'express';

import { AuthRouter } from '../modules/auth/user.routes';
import { BookingsRouter } from '../modules/bookings/bookings.routes';
import { CategoryRoutes } from '../modules/category/category.routes';
import { ReviewAndRatingRoutes } from '../modules/reviewAndRating/reviewAndRating.routes';
import { ServicesRouter } from '../modules/services/services.routes';
import { UserRouter } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/auth',
    routes: AuthRouter,
  },
  {
    path: '/',
    routes: UserRouter,
  },
  {
    path: '/services',
    routes: ServicesRouter,
  },
  {
    path: '/bookings',
    routes: BookingsRouter,
  },
  {
    path: '/categorie',
    routes: CategoryRoutes,
  },
  {
    path: '/review',
    routes: ReviewAndRatingRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
