import app from '@micra/application';
import { TypeDIServiceContainer } from '@micra/typedi-service-container';
import { DatabaseServiceProvider } from 'app/database';
import { ExpressKernel } from 'app/kernel/ExpressKernel';
import { HashServiceProvider } from 'app/hash';
import { RouterServiceProvider } from 'app/router';
import { ServerServiceProvider } from 'app/server';
import { StorageServiceProvider } from 'app/storage';
import { UserServiceProvider } from 'domains/user';
import { AuthServiceProvider } from 'domains/auth';
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
    // Core modules
    ServerServiceProvider,
    DatabaseServiceProvider,
    RouterServiceProvider,
    HashServiceProvider,
    StorageServiceProvider,

    // Domains
    UserServiceProvider,
    AuthServiceProvider,
  ],
});
