import { Configuration } from 'webpack';
import { getEnv } from './env';
import { root, project, build } from './paths';
import { getEnvVariables } from './env-variables';
import { Environment } from './env/types';
import { config } from './config';

export type Argv = {
  config?: string;
  mode?: Configuration['mode'];
  env?: string;
  'config-register'?: string;
  configRegister?: string;
  'config-name'?: string;
  configName?: string;
};

export interface Context {
  argv: Argv;
  config: Configuration;
  env: Environment;
  paths: {
    root(...paths: string[]): string;
    build(...paths: string[]): string;
    project(...paths: string[]): string;
  };
}

export const createContext = async (argv: Argv) => {
  const env = await getEnv();
  await getEnvVariables(env);

  return {
    argv,
    env,
    config,
    paths: {
      root,
      build,
      project,
    },
  };
};
