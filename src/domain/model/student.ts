import { Model, RelationMappings } from "objection";
import { School } from "~/src/domain/model/school";
import { SchoolClass } from "~/src/domain/model/school_class";

export class Student extends Model {
  id: number;
  name: string;
  cpf: string;
  id_colegio: number;
  id_turma: number;
  email: string;
  created_at!: Date;
  updated_at?: Date;

  static get tableName() {
    return "student";
  }

  static get relationMappings(): RelationMappings {
    return {
      school: {
        relation: Model.BelongsToOneRelation,
        modelClass: School,
        join: {
          from: "student.id_colegio",
          to: "school.id",
        },
      },
      schoolClass: {
        relation: Model.BelongsToOneRelation,
        modelClass: SchoolClass,
        join: {
          from: "student.id_turma",
          to: "school_class.id",
        },
      },
    };
  }

  $beforeUpdate(): void {
    this.updated_at = new Date();
  }
}
