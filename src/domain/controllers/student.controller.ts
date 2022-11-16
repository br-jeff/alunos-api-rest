import {
  Controller,
  Get,
  Post,
  Response,
  Params,
  Body,
  Patch,
  Delete,
  Query,
} from "@decorators/express";
import { Response as expressResponse } from "express";
import { CreateStudentUseCase } from "~/src/domain/use_case/create_student";
import { ListAllStudentsUseCase } from "~/src/domain/use_case/list_all_student";
import { Student } from "~/src/domain/model/student";
import Ajv from "ajv";
import { UpdateStudentUseCase } from "~/src/domain/use_case/update_student";
import { DeleteStudentUseCase } from "~/src/domain/use_case/delete_student";
import { GetStudentById } from "~/src/domain/use_case/get_student_by_id";

const ajv = new Ajv();

const bodySchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    cpf: { type: "string" },
    id_colegio: { type: "integer" },
    id_turma: { type: "integer" },
    email: { type: "string" },
    score: { type: "integer" },
  },
  required: ["name", "cpf", "id_colegio", "id_turma", "email", "score"],
};

const updateSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    cpf: { type: "string" },
    id_colegio: { type: "integer" },
    id_turma: { type: "integer" },
    email: { type: "string" },
    score: { type: "integer" },
  },
};

type search = { id_colegio?: number; id_turma?: number; score?: number };

@Controller("/student")
export default class StudentController {
  constructor() {}

  @Get("/")
  async getData(
    @Response() res: expressResponse,
    @Query() queryParams: search
  ) {
    res.json(await new ListAllStudentsUseCase().execute(queryParams));
  }

  @Get("/:id")
  async getDataById(
    @Response() res: expressResponse,
    @Params("id") id: number
  ) {
    res.json(await new GetStudentById().execute(id));
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

  @Patch("/update/:id")
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

  @Delete("/:id")
  async delete(@Params("id") id: number, @Response() res: any) {
    res.json(await new DeleteStudentUseCase().execute(id));
  }
}
