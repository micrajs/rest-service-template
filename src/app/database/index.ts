import Knex from 'knex';
import { ServiceProvider } from '@micra/service-provider';

export class DatabaseServiceProvider extends ServiceProvider {
  async register() {
    const databaseConfig = config('database');

    if (env('DB_DRIVER') === 'sqlite') {
      this.container.value('database', Knex(databaseConfig.drivers.sqlite));
    }
  }
}
