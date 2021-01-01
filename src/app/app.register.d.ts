declare namespace Micra {
  interface Services {
    app: import('@micra/application').Application;
    config: import('@micra/config').Config;
    container: import('@micra/core').ServiceContainer;
  }
  interface Config {
    app: import('app/types').AppConfig;
  }
}
