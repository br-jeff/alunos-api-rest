import { Controller, Get, Response } from "@decorators/express";
import { migrations } from "~/src/domain/use_case/run_migrations";

@Controller("/migrations")
export default class Migrations {
  constructor() {}

  @Get("/")
  async getData(@Response() res: any) {
    try {
      await migrations();
      res.send("Migrations is runing");
    } catch (err) {
      console.error(err);
      res.send("Error");
    }
  }
}
