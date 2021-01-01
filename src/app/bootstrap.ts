import 'app/environment';
import 'app/configurations';
import app from '@micra/application';
import { getNamespace } from 'cls-hooked';

app.start();

global.use = <T = any>(namespace: string): T => {
  const requestScope = getNamespace('request');
  if (requestScope?.active) {
    return requestScope.get('use')(namespace);
  }

  const testScope = getNamespace('test');
  if (testScope?.active) {
    return testScope.get('use')(namespace);
  }

  return app.container?.use(namespace) as T;
};

export { app };
