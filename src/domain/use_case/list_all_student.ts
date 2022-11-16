import { Student } from "~/src/domain/model/student";
import initializeDatabase from "~/src/infra/database/initialize_database";

export class ListAllStudentsUseCase {
  async execute(queryParams: {
    id_colegio?: number;
    id_turma?: number;
    score?: number;
  }) {
    await initializeDatabase();
    return Student.query()
      .withGraphJoined("[school, schoolClass]")
      .modify((builder) => {
        if (queryParams.id_colegio) {
          builder.where("id_colegio", queryParams.id_colegio);
        }
        if (queryParams.id_turma) {
          builder.where("id_turma", queryParams.id_turma);
        }
        if (queryParams.score) {
          builder.where("score", queryParams.score);
        }
      });
  }
}
