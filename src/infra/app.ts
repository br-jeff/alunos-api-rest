import "reflect-metadata";
import express from "express";
import settings from "./config/settings";
import bootstrapControllers from "~/src/infra/utils/bootstrap-controllers";
const app = express();

app.use(express.json());

bootstrapControllers(app);

app.listen(settings.PORT, () => {
  console.log(`App listening on port ${settings.PORT}`);
});
