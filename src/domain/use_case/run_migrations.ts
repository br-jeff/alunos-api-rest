import knex from "knex";
import databaseSettings from "~/src/infra/database/config/settings";
import DatabaseMigrationSeed from "~/src/infra/database/database_migration_seed";

const knexConn = knex(databaseSettings);

export async function migrations(): Promise<void> {
  const databaseMigrationSeed = new DatabaseMigrationSeed(knexConn);
  await databaseMigrationSeed.migrate();
  await databaseMigrationSeed.seed();
  await knexConn.destroy();
}
