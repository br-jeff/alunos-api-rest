import path from "path";
import fs from "fs";
import { attachControllers, Type } from "@decorators/express";
import { Express } from "express";

export default async function bootstrapControllers(app: Express) {
  const controllerPath = path.resolve(__dirname, "../../domain/controllers");
  const controllers: Type[] = [];
  fs.readdirSync(controllerPath).forEach((fileName, key) => {
    controllers[key] = require(controllerPath + "/" + fileName).default;
  });

  attachControllers(app, controllers);
}
