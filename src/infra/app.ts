import express from "express";
import settings from "./config/settings";
import bootstrapControllers from "~/src/infra/utils/bootstrap-controllers";
const app = express();

bootstrapControllers(app);

app.listen(settings.PORT, () => {
  console.log(`app listening on port ${settings.PORT}`);
});
