import { Router, IRouterMatcher } from 'express';
import { ServiceProvider } from '@micra/service-provider';

function safeHandler(fn: 'get'|'post'|'patch'|'put'|'delete', router: Router) {
  const original = router[fn].bind(router);

  (router as any)[fn] = (path: string, ...fn: any) => {
    original(path, async (req, res, next) => {
      try {
        return await fn(req, res, next);
      } catch(e) {
        next(e);
      }
    });
  };
}

export class RouterServiceProvider extends ServiceProvider {
  register() {
    const router = Router();
    const get = router.get.bind(router);
    const post = router.post.bind(router);
    const put = router.put.bind(router);
    const put = router.put.bind(router);

    this.container.value('router', router);
  }

  boot() {
    require('routes/auth');
  }
}
