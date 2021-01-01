declare namespace Micra {
  interface Services {
    database: import('knex');
  }

  export interface Config {
    database: import('app/database/types').DatabaseConfig;
  }
}

declare namespace NodeJS {
  interface ProcessEnv {
    DB_DRIVER: 'sqlite';
    DB_FILENAME: string;
  }
}
