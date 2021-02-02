import type { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (err, _req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res
    .status(err.status ?? 500)
    .send({ message: err.message ?? 'Internal Server Error' });
};
