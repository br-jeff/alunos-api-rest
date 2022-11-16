import { Knex } from "knex";

exports.seed = async function (knex: Knex) {
  await knex("student").insert([
    {
      cpf: "95089167028",
      name: "Ronaldinho Gaucho",
      id_colegio: "1",
      id_turma: "1",
      email: "ronaldinho@email.com",
    },
    {
      cpf: "24235430228",
      name: "Neymar Junior",
      id_colegio: 2,
      id_turma: 2,
      score: 8,
      email: "meninoney@psg.com",
    },
    {
      cpf: "34235433255",
      name: "Vinicius Junior",
      id_colegio: 3,
      id_turma: 3,
      score: 9.5,
      email: "vinijr@realmadrid.com",
    },
    {
      cpf: "95089167028",
      name: "Messi",
      id_colegio: 2,
      id_turma: 1,
      score: 9.2,
      email: "messi@psg.com",
    },
    {
      cpf: "24235430228",
      name: "Kylian Mbappé",
      id_colegio: 2,
      id_turma: 2,
      score: 9.1,
      email: "mbappe@psg.com",
    },
    {
      cpf: "35345433255",
      name: "Karim Benzema",
      id_colegio: 3,
      id_turma: 3,
      score: 5,
      email: "benzema@realmadrid.com",
    },
    {
      cpf: "35345433255",
      name: "Rodrygo Silva de Goes",
      id_colegio: 3,
      id_turma: 2,
      score: 9.9,
      email: "rodrygo@realmadrid.com",
    },
  ]);
};
