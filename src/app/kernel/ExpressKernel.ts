import { Kernel } from '@micra/kernel';
import { errorHandler } from 'app/server/middlewares/errorHandler';
import type { Express } from 'express';

export class ExpressKernel extends Kernel {
  protected server!: Express;

  boot() {
    this.server = use('server');
    const routes = use('router');
    const { middlewares } = config('server');

    for (const middleware of middlewares) {
      this.server.use(middleware);
    }

    this.server.use(routes);

    this.server.use(errorHandler);
  }

  run() {
    this.server.listen(process.env.PORT ?? 1234, () => {
      console.log('Running server in:', 'http://localhost:'+process.env.PORT ?? 1234);
    });
  }
}
