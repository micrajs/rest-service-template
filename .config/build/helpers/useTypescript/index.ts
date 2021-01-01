import { Context } from '../createContext';
import { ENV } from '../env/constants';

export const useTypescript = ({ config, paths, env }: Context) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
    options: {
      transpileOnly: true,
      configFile: paths.root('tsconfig.json'),
    },
  });

  config.resolve.extensions.unshift('.ts', '.tsx');
};
