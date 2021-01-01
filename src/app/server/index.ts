import express from 'express';
import { ServiceProvider } from '@micra/service-provider';

export class ServerServiceProvider extends ServiceProvider {
  register() {
    this.container.value('server', express());
  }
}
