import { knex, Knex } from "knex";
import { Model } from "objection";

import databaseSettings from "./config/settings";

export default function initializeDatabase(): Knex {
  const settings = { ...databaseSettings };

  const knexConn = knex(settings);
  Model.knex(knexConn);
  return knexConn;
}
