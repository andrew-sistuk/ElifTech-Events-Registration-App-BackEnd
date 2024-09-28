import { Router } from 'express';
import {
  addMemberController,
  getAllEventsController,
  getEventByIDController,
} from '../controllers/events.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { memberSchemaAdd } from '../validation/events.js';

const router = Router();

router.get('/events', ctrlWrapper(getAllEventsController));

router.get('/events/:eventId/view', ctrlWrapper(getEventByIDController));

router.post('/events/:eventId/register',
  validateBody(memberSchemaAdd),
  ctrlWrapper(addMemberController));


export default router;
