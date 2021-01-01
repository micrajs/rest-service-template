import app from '@micra/application';
import type { DatabaseConfig } from 'app/database/types';

app.config.set<DatabaseConfig>('database', {
  drivers: {
    sqlite: {
      client: 'sqlite3',
      useNullAsDefault: true,
      migrations: {
        ...(process.env.NODE_ENV === 'test' && {
          directory: require('path').join(
            process.cwd(),
            '.config/database/migrations',
          ),
        }),
      },
      connection: {
        filename:
          process.env.NODE_ENV !== 'test' ? env('DB_FILENAME', ':memory:') : ':memory:',
      },
    },
  },
});
