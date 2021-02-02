import cors from 'cors';
import express from 'express';
import app from '@micra/application';
import { errorHandler } from './middlewares/errorHandler';
import { inScope } from 'app/server/middlewares/inScope';
import type { ServerConfig } from 'app/server/types';

app.config.set<ServerConfig>('server', {
  errorHandler: errorHandler,
  middlewares: [
    cors({
      origin: true,
      credentials: true,
    }),
    express.urlencoded({ extended: true }),
    express.json(),
    inScope,
  ],
});
