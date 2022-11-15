import { Knex } from "knex";

exports.seed = async function (knex: Knex) {
  await knex("student").insert([
    {
      id: 1,
      cpf: "95089167028",
      name: "Ronaldinho Gaucho",
      id_colegio: "1",
      id_turma: "1",
      email: "ronaldinho@email.com",
    },
    {
      id: 2,
      cpf: "24235430228",
      name: "Neymar Junior",
      id_colegio: 2,
      id_turma: 2,
      email: "meninoney@psg.com",
    },
    {
      id: 3,
      cpf: "34235433255",
      name: "Vinicius Junior",
      id_colegio: 3,
      id_turma: 3,
      email: "vinijr@realmadrid.com",
    },
    {
      id: 4,
      cpf: "95089167028",
      name: "Messi",
      id_colegio: 2,
      id_turma: 1,
      email: "messi@psg.com",
    },
    {
      id: 5,
      cpf: "24235430228",
      name: "Kylian Mbappé",
      id_colegio: 2,
      id_turma: 2,
      email: "mbappe@psg.com",
    },
    {
      id: 6,
      cpf: "35345433255",
      name: "Karim Benzema",
      id_colegio: 3,
      id_turma: 3,
      email: "benzema@realmadrid.com",
    },
    {
      id: 7,
      cpf: "35345433255",
      name: "Rodrygo Silva de Goes",
      id_colegio: 3,
      id_turma: 2,
      email: "rodrygo@realmadrid.com",
    },
  ]);
};
