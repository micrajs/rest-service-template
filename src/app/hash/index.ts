import bcrypt from 'bcryptjs';
import { ServiceProvider } from '@micra/service-provider';

export class HashServiceProvider extends ServiceProvider {
  register() {
    const hashConfig = config('hash');

    this.container.value('hash/encrypt', (value: string) => {
      const salt = bcrypt.genSaltSync(hashConfig.salt);
      return bcrypt.hashSync(value, salt);
    });

    this.container.value('hash/compare', (value: string, hash: string) => {
      return bcrypt.compareSync(value, hash);
    });
  }

  boot() {
    // TODO: write HashServiceProvider boot method
  }
}
