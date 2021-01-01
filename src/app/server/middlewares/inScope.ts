import app from '@micra/application';
import { getNamespace } from 'cls-hooked';
import { RequestHandler } from 'express';

export const inScope: RequestHandler = (req, res, next) => {
  const scope = getNamespace('request');
  return scope?.run(() => {
    const container = app.container?.clone();
    container?.value('request', req);
    container?.value('response', res);

    scope.set('use', (namespace: string) => {
      try {
        return container?.use(namespace);
      } catch (e) {
        return app.container?.use(namespace);
      }
    });

    next();
  });
};
