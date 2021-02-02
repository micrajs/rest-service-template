import { Router } from 'express';
import { ServiceProvider } from '@micra/service-provider';

export class RouterServiceProvider extends ServiceProvider {
  register() {
    this.container.value('router', Router());
  }

  boot() {
    require('routes/main');
  }
}
