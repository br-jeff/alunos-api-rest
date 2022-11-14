import express from "express";
import { attachControllers } from "@decorators/express";
import { HelloWolrd } from "~/src/domain/controllers";
import settings from "./config/settings";
import bootstrapControllers from "~/src/infra/utils/get-all-controllers";
const app = express();

bootstrapControllers(app);

app.listen(settings.PORT, () => {
  console.log(`app listening on port ${settings.PORT}`);
});
