import DatabaseMigrationSeed from "~/src/infra/database/database_migration_seed";
import initializeDatabase from "~/src/infra/database/initialize_database";

const knexConn = initializeDatabase();

export class DatabaseMigrations {
  async execute() {
    const databaseMigrationSeed = new DatabaseMigrationSeed(await knexConn);
    await databaseMigrationSeed.migrate();
    await databaseMigrationSeed.seed();
    await knexConn.destroy();
  }
}
