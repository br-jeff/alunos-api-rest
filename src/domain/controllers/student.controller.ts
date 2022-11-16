import {
  Controller,
  Get,
  Post,
  Response,
  Params,
  Body,
  Patch,
} from "@decorators/express";
import {
  Response as expressResponse,
  Request as expressRequest,
} from "express";
import { CreateStudentUseCase } from "~/src/domain/use_case/create_student";
import { ListAllStudentsUseCase } from "~/src/domain/use_case/list_all_student";
import { Student } from "~/src/domain/model/student";
import Ajv from "ajv";
import { UpdateStudentUseCase } from "~/src/domain/use_case/update_student";

const ajv = new Ajv();

const bodySchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    cpf: { type: "string" },
    id_colegio: { type: "integer" },
    id_turma: { type: "integer" },
    email: { type: "string" },
  },
  required: ["name", "cpf", "id_colegio", "id_turma", "email"],
};

const updateSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    cpf: { type: "string" },
    id_colegio: { type: "integer" },
    id_turma: { type: "integer" },
    email: { type: "string" },
  },
};

@Controller("/student")
export default class StudentController {
  constructor() {}

  @Get("/")
  async getData(@Response() res: expressResponse) {
    res.json(await new ListAllStudentsUseCase().execute());
  }

  @Post("/create")
  async create(@Body() body: Student, @Response() res: any) {
    const validate = await ajv.compile(bodySchema);
    const valid = validate(body);

    if (!valid) {
      res.json(validate.errors);
    }

    res.json(await new CreateStudentUseCase().execute(body));
  }

  @Patch("/:id")
  async update(
    @Body() body: Student,
    @Params("id") id: number,
    @Response() res: any
  ) {
    const validate = await ajv.compile(updateSchema);
    const valid = validate(body);

    if (!valid) {
      res.json(validate.errors);
    }

    res.json(await new UpdateStudentUseCase().execute(body, id));
  }
}
