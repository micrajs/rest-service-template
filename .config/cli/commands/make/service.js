const MakeService = {
  command: 'make:service',
  description: 'Generate a new domain service',
  arguments: [
    {
      name: 'domain',
      description: 'Domain name.',
      required: true,
    },
    {
      name: 'service',
      description: 'Service name.',
      required: true,
      transform(value) {
        return /service/gi.test(value)
          ? value.toLowerCase().replace(/service/gi, 'Service')
          : `${value}Service`;
      },
    },
    {
      name: 'type',
      description: 'Service type.',
      default: 'API',
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
      const RAW_DOMAIN = parser.getArgument(0).value;
      const RAW_NAME = parser.getArgument(1).value;
      const RAW_TYPE = parser.getArgument(2).value;
      const FORCE = parser.getOption('force').value || undefined;

      // Definition
      const DOMAIN = variationsOf(RAW_DOMAIN);
      const NAME = variationsOf(RAW_NAME);
      const TYPE = variationsOf(RAW_TYPE);
      const FILES = [
        // [PATH, TEMPLATE]
        [
          domains(
            DOMAIN.SINGULAR.KEBAB,
            `data/services/${TYPE.PASCAL}${NAME.PASCAL}.ts`,
          ),
          template('domains.data.service'),
        ],
        [
          domains(DOMAIN.SINGULAR.KEBAB, `types/services/${NAME.PASCAL}.ts`),
          template('domains.types.service'),
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
              TYPE,
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

module.exports = MakeService;
