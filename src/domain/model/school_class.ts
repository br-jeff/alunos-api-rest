import { Model } from "objection";

export class SchoolClass extends Model {
  id: number;
  name: string;
  created_at!: Date;
  updated_at?: Date;

  static get tableName() {
    return "school_class";
  }

  $beforeUpdate(): void {
    this.updated_at = new Date();
  }
}
