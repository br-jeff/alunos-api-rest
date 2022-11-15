import { Knex } from "knex";

exports.seed = async function (knex: Knex) {
  await knex("school").insert([
    {
      id: 1,
      name: "Sem Cólegio",
      street: "Rua dos bobos numero 0",
    },
    {
      id: 2,
      name: "Colégio PSG",
      street: "Parc des Princes 123",
    },
    {
      id: 3,
      name: "Colégio Real Madrid",
      street: "Santiago Bernabéu  123",
    },
  ]);
};
