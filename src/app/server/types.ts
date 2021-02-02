import type { ErrorRequestHandler, RequestHandler } from 'express';

export interface ServerConfig {
  errorHandler?: ErrorRequestHandler;
  middlewares: RequestHandler[];
}
