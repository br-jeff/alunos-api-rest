import { Student } from "~/src/domain/model/student";
import initializeDatabase from "~/src/infra/database/initialize_database";

export class CreateStudentUseCase {
  async execute(student: Student) {
    await initializeDatabase();
    return Student.query().insert(student);
  }
}
