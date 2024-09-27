import { getAllEvents, getEventByID } from '../services/events.js';
import createHttpError from 'http-errors';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';

export const getAllEventsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);

  // console.log('-------------------------', req.query);

  const events = await getAllEvents({
    page,
    perPage,
  });
  res.json({
    status: 200,
    message: 'Successfully found events!',
    data: events,
  });
};

export const getEventByIDController = async (req, res, _next) => {
  const { eventId } = req.params;

  const event = await getEventByID(eventId);

  if (!event) {
    throw createHttpError(404, 'Student not found');
  }

  res.json({
    status: 200,
    message: `Successfully found event with id ${eventId}!`,
    data: event,
  });
};
