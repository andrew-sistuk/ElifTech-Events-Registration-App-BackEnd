import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, _next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.name,
      error: err,
    });
  }

  res.status(500).json({
    message: 'Something went wrong',
    error: err.message,
  });
};
