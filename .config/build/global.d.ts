/// <reference types="node" />

type Environment = 'alpha' | 'dev' | 'staging' | 'prod' | 'test';

interface EnvVariables {
  NODE_ENV: 'production' | 'development' | 'test';
  APP_ENV?: Environment;
  PORT?: string;
}

declare namespace NodeJS {
  interface ProcessEnv extends EnvVariables {}
}
