import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
 import serviceRoot from './route/services'
import { mongoconnection } from './database'
import dotenv from "dotenv";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from "./swagger/swagger.json";
import fileUpload from "express-fileupload"

dotenv.config();
const  app = express();
mongoconnection();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(Object({ extended: true })));
app.use(express.json());
app.use(fileUpload({ createParentPath: true }));
app.use("/gateway", serviceRoot);
app.use("/swagger-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const port = process.env.PORT;

app.listen(port, (): void => {
  console.log(`Port :- ${port}`);
});

export default app;

