import { Knex } from "knex";

export default class DatabaseMigrationSeed {
  knex: Knex;

  constructor(knex: Knex) {
    this.knex = knex;
  }

  async migrate(): Promise<void> {
    console.info("--- start running migrations");
    return this.knex.migrate.latest().then(
      () => {
        console.info("Running migrations...");
      },
      (error) => {
        console.error(error);
      }
    );
  }

  async seed(): Promise<void> {
    console.info("--- start running seeds...");
    return this.knex.seed.run().then(
      () => {
        console.info(`running seeds`);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
