import { eventsCollection, membersCollection } from '../db/models/events.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';
import { SORT_ORDER } from '../constants/events.js';

export const getAllEvents = async ({ page, perPage,  sortOrder = SORT_ORDER.ASC,
                                     sortBy = 'title', }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const eventsQuery = eventsCollection.find();

  const [eventsCount, events] = await Promise.all([
    eventsCollection.find().merge(eventsQuery).countDocuments(),
    eventsQuery.skip(skip).limit(limit).sort({ [sortBy]: sortOrder }).exec(),
  ]);
  const paginationData = calculatePaginationData(eventsCount, page, perPage);

  return {
    data: events,
    ...paginationData,
  };
};

export const getEventByID = async (eventId) => {
  // console.log('--------------------',eventId);
  // return membersCollection.findById(eventId);
  // return eventsCollection.findOne({ eventId });
  return membersCollection.find({ eventId: { $eq: eventId } });
};

export const addMember = async payload => {
  return membersCollection.create(payload);
};
