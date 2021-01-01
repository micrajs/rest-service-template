import express from 'express';
import app from '@micra/application';
import { inScope } from 'app/server/middlewares/inScope';
import type { ServerConfig } from 'app/server/types';

app.config.set<ServerConfig>('server', {
  middlewares: [express.urlencoded({ extended: true }), express.json(), inScope],
});
