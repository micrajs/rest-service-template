declare namespace Micra {
  interface Services {
    'storage/cookie': import('app/storage/data/CookieStorage/types').CookieStorage;
  }

  export interface Config {
    storage: import('app/storage/types').StorageConfig;
  }
}
