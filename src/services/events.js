import { eventsCollection } from '../db/models/events.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllEvents = async ({ page, perPage }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const eventsQuery = eventsCollection.find();

  const [eventsCount, events] = await Promise.all([
    eventsCollection.find().merge(eventsQuery).countDocuments(),
    eventsQuery.skip(skip).limit(limit).exec(),
  ]);
  const paginationData = calculatePaginationData(eventsCount, page, perPage);
  // const eventsQuery = eventsCollection.find();
  // const eventsCount = await eventsCollection
  //   .find()
  //   .merge(eventsQuery)
  //   .countDocuments();
  //
  // const events = await eventsQuery.skip(skip).limit(limit).exec();
  //
  // const paginationData = calculatePaginationData(eventsCount, perPage, page);

  return {
    data: events,
    ...paginationData,
  };
};

export const getEventByID = async (id) => {
  return eventsCollection.findById(id);
};
