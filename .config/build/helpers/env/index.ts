import { ENV } from './constants';
import { Environment } from './types';

export const getEnv = async (): Promise<Environment> => {
  if (process.env.APP_ENV) {
    switch (process.env.APP_ENV) {
      case ENV.ALPHA:
        return ENV.ALPHA;
      case ENV.DEV:
        return ENV.DEV;
      case ENV.STAGING:
        return ENV.STAGING;
      case ENV.PROD:
        return ENV.PROD;
      case ENV.TEST:
        return ENV.TEST;
    }
  }

  switch (process.env.NODE_ENV) {
    case 'production':
      return ENV.PROD;
    case 'test':
      return ENV.TEST;
    default:
      return ENV.DEV;
  }
};
