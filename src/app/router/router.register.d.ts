declare namespace Micra {
  interface Services {
    router: import('express').Router;
  }

  export interface Config {
    router: import('app/router/types').RouterConfig;
  }
}
