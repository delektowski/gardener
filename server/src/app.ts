import express, { Express } from "express";

import cors from "cors";
import plantingRunner from "./plantingRunner";
const app: Express = express();
const port = 3333;

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.post("/startGardening", async (req: any, res: any) => {
  const {
    body: { login, pass, plant,harvestTime },
  } = req;
  plantingRunner(login, pass, plant,harvestTime);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
