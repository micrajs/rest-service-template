const { existsSync } = require('fs');

const MakeValidation = {
  command: 'make:validation',
  description: 'Generate a new domain validation',
  arguments: [
    {
      name: 'domain',
      description: 'Domain name.',
      required: true,
    },
    {
      name: 'interface',
      description: 'Interface name.',
      required: true,
      transform(value) {
        return /validate/gi.test(value)
          ? value.toLowerCase().replace(/validate/gi, 'validate')
          : `validate ${value}`;
      },
    },
  ],
  options: [
    {
      name: 'force',
      alias: 'f',
      description: 'Should overwrite file if it exists',
      default: false,
    },
  ],
  async handler({
    createFile,
    parser,
    template,
    variationsOf,
    defaultVariables,
  }) {
    try {
      const { domains } = use('paths/helpers');
      // Params
      const RAW_DOMAIN = parser.getArgument(0).value || undefined;
      const RAW_NAME = parser.getArgument(1).value || undefined;
      const FORCE = parser.getOption('force').value || undefined;

      // Definition
      const DOMAIN = variationsOf(RAW_DOMAIN);
      const NAME = variationsOf(RAW_NAME);
      const FILES = [
        // [PATH, TEMPLATE]
        [
          domains(
            DOMAIN.SINGULAR.KEBAB,
            `data/validations/${NAME.CAMEL}.ts`,
          ),
          template('domains.data.validation'),
        ],
      ];

      // Generate files
      FILES.forEach(([path, template]) => {
        createFile(
          path,
          use('TemplateEngine').render(
            template,
            defaultVariables({
              NAME,
              DOMAIN,
            }),
          ),
          FORCE,
        );
      });
    } catch (e) {
      if (e.message.endsWith('already exists.')) {
        throw new Error(
          `${e.message} Please choose a different name, path or use the --force flag to overwrite the existing file.`,
        );
      }

      throw e;
    }
  },
};

module.exports = MakeValidation;
