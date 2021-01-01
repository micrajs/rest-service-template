module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './develop.sqlite',
    },
    migrations: {
      /** This is where you can declare your migration file paths */
      directory: [
        // '../../src/domains/user/data/migrations',
      ],
    },
  },
};
