import type { RequestHandler } from 'express';

export interface ServerConfig {
  middlewares: RequestHandler[];
}
