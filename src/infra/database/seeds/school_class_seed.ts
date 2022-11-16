import { Knex } from "knex";

exports.seed = async function (knex: Knex) {
  await knex("school_class").insert([
    {
      name: "3 A",
    },
    {
      name: "3 B",
    },
    {
      name: "3 C",
    },
  ]);
};
