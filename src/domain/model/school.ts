import { Model } from "objection";

export class School extends Model {
  id: number;
  name: string;
  street: string;
  created_at!: Date;
  updated_at?: Date;

  static get tableName() {
    return "school";
  }

  $beforeUpdate(): void {
    this.updated_at = new Date();
  }
}
