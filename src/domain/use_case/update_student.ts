import { Student } from "~/src/domain/model/student";
import initializeDatabase from "~/src/infra/database/initialize_database";

export class UpdateStudentUseCase {
  async execute(student: Student, id: number) {
    await initializeDatabase();
    return Student.query().patch(student).where("id", id);
  }
}
