import app from '@micra/application';
import { TypeDIServiceContainer } from '@micra/typedi-service-container';
import { ExpressKernel } from 'app/kernel/ExpressKernel';
import { RouterServiceProvider } from 'app/router';
import { ServerServiceProvider } from 'app/server';
import { StorageServiceProvider } from 'app/storage';
import type { AppConfig } from 'app/types';

app.config.set<AppConfig>('app', {
  /**
   * Application kernel
   */
  kernel: ExpressKernel,

  /**
   * Service container class to be used.
   */
  container: TypeDIServiceContainer,

  /**
   * Service providers
   */
  services: [
    // Core modules service providers
    ServerServiceProvider,
    RouterServiceProvider,
    StorageServiceProvider,

    // Domains service providers
  ],
});
