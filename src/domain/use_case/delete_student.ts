import { Student } from "~/src/domain/model/student";
import initializeDatabase from "~/src/infra/database/initialize_database";

export class DeleteStudentUseCase {
  async execute(id: number) {
    await initializeDatabase();
    return Student.query().deleteById(id);
  }
}
