import app from '@micra/application';
import { HashConfig } from 'app/hash/types';

app.config.set<HashConfig>('hash', {
  salt: Number(env('HASH_SALT', '10')),
});
