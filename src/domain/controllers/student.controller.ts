import { Controller, Get, Response } from "@decorators/express";
import { ListAllStudentsUseCase } from "~/src/domain/use_case/list_all_student";

@Controller("/student")
export default class IndexController {
  constructor() {}

  @Get("/")
  async getData(@Response() res: any) {
    res.json(await new ListAllStudentsUseCase().execute());
  }
}
