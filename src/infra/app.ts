import express from "express";
import { attachControllers } from "@decorators/express";
import { HelloWolrd } from "~/src/domain/controllers";

const app = express();
const port = 8080;

attachControllers(app, [HelloWolrd]);

app.listen(port, () => {
  console.log(`Example app listening on port 2 ${port}`);
});
