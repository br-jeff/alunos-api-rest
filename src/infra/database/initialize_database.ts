import { knex, Knex } from "knex";

import databaseSettings from "./config/settings";

export default function initializeDatabase(): Knex {
  const settings = { ...databaseSettings };

  const knexConn = knex(settings);

  return knexConn;
}
