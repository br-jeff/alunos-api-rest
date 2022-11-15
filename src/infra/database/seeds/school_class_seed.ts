import { Knex } from "knex";

exports.seed = async function (knex: Knex) {
  await knex("school_class").insert([
    {
      id: 1,
      name: "3 A",
    },
    {
      id: 2,
      name: "3 B",
    },
    {
      id: 3,
      name: "3 C",
    },
  ]);
};
