const MakeDataSource = {
  command: 'make:data-source',
  description: 'Generate a new domain data source',
  arguments: [
    {
      name: 'domain',
      description: 'Domain name.',
      required: true,
    },
    {
      name: 'data-source',
      description: 'Data source name.',
      required: true,
      transform(value) {
        return /dataSource/gi.test(value)
          ? value.toLowerCase().replace(/dataSource/gi, 'DataSource')
          : `${value}DataSource`;
      },
    },
    {
      name: 'type',
      description: 'Data source type.',
      default: 'SQL',
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
      const RAW_NAME = parser
        .getArgument(1)
        .value.toLowerCase()
        .endsWith('datasource')
        ? parser.getArgument(1).value
        : `${parser.getArgument(1).value}DataSource`;
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
            `data/data-sources/${TYPE.PASCAL}${NAME.PASCAL}.ts`,
          ),
          template('domains.data.data-source'),
        ],
        [
          domains(
            DOMAIN.SINGULAR.KEBAB,
            `types/data-sources/${NAME.PASCAL}.ts`,
          ),
          template('domains.types.data-source'),
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

module.exports = MakeDataSource;
