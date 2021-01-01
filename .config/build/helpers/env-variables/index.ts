import dotenv from 'dotenv';
import { join } from 'path';
import { existsSync } from 'fs';
import { Environment } from '../env/types';

export const getEnvVariables = async (env: Environment) => {
  [
    join(process.cwd(), `.env.${env}.local`),
    join(process.cwd(), `.env.${env}`),
    join(process.cwd(), `.env.local`),
    join(process.cwd(), `.env`),
  ].forEach((path) => {
    if (existsSync(path)) {
      dotenv.config({
        path,
      });
    }
  });
};
