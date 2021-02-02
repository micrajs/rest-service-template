import { ServiceProvider } from '@micra/service-provider';
import { CookieStorageWrapper } from 'app/storage/data/CookieStorage';
import { getCookieClient } from './data/CookieStorage/helpers/getCookieClient';

export class StorageServiceProvider extends ServiceProvider {
  register() {
    this.container.factory(
      'storage/cookie',
      () =>
        new CookieStorageWrapper(getCookieClient(), config('storage').cookies),
    );
  }
}
