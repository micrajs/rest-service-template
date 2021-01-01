import type { Config } from 'knex';

export interface DatabaseConfig {
  drivers: {
    sqlite: Config;
  };
}
