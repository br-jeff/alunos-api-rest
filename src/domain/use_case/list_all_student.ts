import { Student } from "~/src/domain/model/student";
import initializeDatabase from "~/src/infra/database/initialize_database";

export class ListAllStudentsUseCase {
  async execute() {
    await initializeDatabase();
    return Student.query().withGraphJoined("[school, schoolClass]");
  }
}
