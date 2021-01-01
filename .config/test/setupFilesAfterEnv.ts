import '../../src/global.d';

beforeEach(async () => {
  const { migrate } = use<any>('database') as import('knex');

  await migrate.forceFreeMigrationsLock();
  await migrate.rollback();
  await migrate.latest()
});
