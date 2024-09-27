import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from '../constants/events.js';

const parseNumber = (num, defaultValue) => {
  if (typeof num !== 'string') return defaultValue;

  const parseNum = parseInt(num);
  if (isNaN(parseNum)) return defaultValue;

  return parseNum;
};

export const parsePaginationParams = (query) => {
  const { page, perPage } = query;

  const parsedPage = parseNumber(page, DEFAULT_PAGE);
  const parsedPerPage = parseNumber(perPage, DEFAULT_PER_PAGE);

  return {
    page: parsedPage,
    perPage: parsedPerPage,
  };
};
