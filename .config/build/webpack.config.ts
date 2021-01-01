import { Configuration } from 'webpack';
import { createContext } from './helpers/createContext';
import { ENV } from './helpers/env/constants';
import { dev } from './webpack.dev';
import { prod } from './webpack.prod';

export default async (
  _: string,
  argv: Record<string, any>,
): Promise<Configuration | Configuration[]> => {
  const context = await createContext(argv);

  return context.env === ENV.PROD ? await prod(context) : await dev(context);
};
