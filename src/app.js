import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//Routers`
import homeRouter from "./routers/homeRouter";
import weatherRouter from "./routers/weatherRouter.js";

dotenv.config({ path: ".env" });
const app = express();

//Allow CORS access for PORT 5000
app.use(cors());

// Use common 3rd-party middlewares
app.use(express.json());

// Use routers
app.use("/", homeRouter);
app.use("/api/v1/weather", weatherRouter);

export default app;
