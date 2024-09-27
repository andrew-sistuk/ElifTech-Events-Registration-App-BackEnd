import { Router } from 'express';
import {
  getAllEventsController,
  getEventByIDController,
} from '../controllers/events.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/events', ctrlWrapper(getAllEventsController));

router.get('/events/:eventId', ctrlWrapper(getEventByIDController));

export default router;
