// src/utils/parseSortParams.js

import { SORT_ORDER } from "../constants/events.js";

const parseSortOrder = (sortOrder) => {
  const isKnownOrder = [SORT_ORDER.ASC, SORT_ORDER.DESC].includes(sortOrder);
  if (isKnownOrder) return sortOrder;
  return SORT_ORDER.ASC;
};


const parseSortBy = (sortBy) => {
  const keysOfEvents = [
    'title',
    'event_date',
    'organizer',
  ];

  if (keysOfEvents.includes(sortBy)) {
    return sortBy;
  }

  return 'title';
};

export const parseSortParams = (query) => {
  const { sortOrder, sortBy } = query;

  const parsedSortOrder = parseSortOrder(sortOrder);
  const parsedSortBy = parseSortBy(sortBy);

  return {
    sortOrder: parsedSortOrder,
    sortBy: parsedSortBy,
  };
};
