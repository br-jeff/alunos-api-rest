import { Controller, Get, Response } from "@decorators/express";
import { DatabaseMigrations } from "~/src/domain/use_case/run_migrations";

@Controller("/migrations")
export default class MigrationsController {
  constructor() {}

  @Get("/")
  async getData(@Response() res: any) {
    try {
      await new DatabaseMigrations().execute();
      res.send("Migrations is runing");
    } catch (err) {
      console.error(err);
      res.json({ error: err });
    }
  }
}
