import express from "express";
import { attachControllers } from "@decorators/express";
import { HelloWolrd } from "~/src/domain/controllers";
import settings from "./config/settings";
const app = express();

attachControllers(app, [HelloWolrd]);

app.listen(settings.PORT, () => {
  console.log(`app listening on port ${settings.PORT}`);
});
