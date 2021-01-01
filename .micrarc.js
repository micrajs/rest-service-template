const { join } = require('path');

module.exports = {
  providers: [require('./.config/cli/service-providers/PathsServiceProvider')],
  commands: [
    require('./.config/cli/commands/make/module'),
    require('./.config/cli/commands/make/helper'),
    require('./.config/cli/commands/make/data-source'),
    require('./.config/cli/commands/make/service'),
    require('./.config/cli/commands/make/factory'),
    require('./.config/cli/commands/make/validation'),
    require('./.config/cli/commands/make/interface'),
    require('./.config/cli/commands/make/service-provider'),
  ],
  template: {
    domains: {
      data: {
        'data-source': join(__dirname, './.config/cli/templates/domains/data/data-source.mustache'),
        'service-provider': join(
          __dirname,
          './.config/cli/templates/domains/data/service-provider.mustache',
        ),
        service: join(__dirname, './.config/cli/templates/domains/data/service.mustache'),
        validation: join(__dirname, './.config/cli/templates/domains/data/validation.mustache'),
      },
      testing: {
        factory: join(__dirname, './.config/cli/templates/domains/testing/factory.mustache'),
      },
      types: {
        interface: join(__dirname, './.config/cli/templates/domains/types/interface.mustache'),
        service: join(__dirname, './.config/cli/templates/domains/types/service.mustache'),
        'data-source': join(
          __dirname,
          './.config/cli/templates/domains/types/data-source.mustache',
        ),
      },
    },
    module: {
      config: join(__dirname, './.config/cli/templates/module/config.mustache'),
      index: join(__dirname, './.config/cli/templates/module/index.mustache'),
      types: join(__dirname, './.config/cli/templates/module/types.mustache'),
      register: join(__dirname, './.config/cli/templates/module/register.mustache'),
    },
    helper: {
      index: join(__dirname, './.config/cli/templates/helper/index.mustache'),
    },
  },
  paths: {
    root: join(process.cwd(), 'src'),
    app: join(process.cwd(), 'src/app'),
    domains: join(process.cwd(), 'src/domains'),
    helpers: join(process.cwd(), 'src/helpers'),
    routes: join(process.cwd(), 'src/routes'),
  },
};
