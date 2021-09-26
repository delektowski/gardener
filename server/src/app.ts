import express, { Express } from "express";

import cors from "cors";
import cypressRunner from "./cypressRunner";
const app: Express = express();
const port = 3333;

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.post("/createText", async (req: any, res: any) => {
  const {
    body: { login, pass, plant },
  } = req;
  cypressRunner(login, pass, plant);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
