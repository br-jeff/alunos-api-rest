import { Knex } from "knex";

exports.seed = async function (knex: Knex) {
  await knex("school").insert([
    {
      name: "Sem Cólegio",
      street: "Rua dos bobos numero 0",
    },
    {
      name: "Colégio PSG",
      street: "Parc des Princes 123",
    },
    {
      name: "Colégio Real Madrid",
      street: "Santiago Bernabéu  123",
    },
  ]);
};
