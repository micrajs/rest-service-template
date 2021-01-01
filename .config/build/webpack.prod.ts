import { Configuration, ProgressPlugin } from 'webpack';
import { Context } from './helpers/createContext';
import { useTypescript } from './helpers/useTypescript';

export const prod = async (context: Context): Promise<Configuration> => {
  useTypescript(context);
  const { config, paths } = context;

  // Mode
  config.mode = 'production';

  // DevTools
  config.devtool = 'source-map';

  // Entry
  config.entry['main'] = paths.project('index.ts');

  // Output
  config.output.filename = '[name].[contenthash].js';
  config.output.path = paths.build();
  config.resolve.modules = [
    paths.project(),
    'node_modules',
  ];

  // Plugins
  config.plugins.push(
    new ProgressPlugin({}),
  );

  // Optimization
  config.optimization.runtimeChunk = 'single';
  config.optimization.splitChunks = {
    chunks: 'all',
    maxInitialRequests: Infinity,
    minSize: 1,
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name(module: any) {
          const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
          return `vendor.${packageName.replace('@', '')}`;
        },
      },
    },
  };

  return config;
};
