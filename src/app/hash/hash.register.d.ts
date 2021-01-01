declare namespace Micra {
  interface Services {
    'hash/encrypt': import('app/hash/types').HashEncrypt;
    'hash/compare': import('app/hash/types').HashCompare;
  }

  export interface Config {
    hash: import('app/hash/types').HashConfig;
  }
}

declare namespace NodeJS {
  interface ProcessEnv {
    HASH_SALT: string;
  }
}
