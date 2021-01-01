import { Configuration, ProgressPlugin } from 'webpack';
import nodeExternals from 'webpack-node-externals';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { Context } from './helpers/createContext';
import { useTypescript } from './helpers/useTypescript';

export const dev = async (context: Context): Promise<Configuration> => {
  useTypescript(context);
  const { config, paths } = context;

  // Mode
  config.mode = 'development';

  // DevTools
  config.devtool = 'source-map';

  // Entry
  config.entry['index'] = paths.project('index.ts');

  // Output
  config.output.filename = '[name].js';
  config.output.path = paths.build();
  config.resolve.modules = [
    paths.project(),
    'node_modules',
  ];

  // Plugins
  config.plugins.push(
    new ProgressPlugin({}),
    new CleanWebpackPlugin(),
  );

  // Externals
  config.externals = [nodeExternals()];

  return config;
};
