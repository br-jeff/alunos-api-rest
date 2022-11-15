import { Controller, Get, Response } from "@decorators/express";

@Controller("/")
export default class IndexController {
  constructor() {}

  @Get("/")
  async getData(@Response() res: any) {
    res.send("Server is running");
  }
}
