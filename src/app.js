import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//Routers`
import homeRouter from "./routers/homeRouter.js";
import weatherRouter from "./routers/weatherRouter.js";
import userRouter from "./routers/userRouter.js";

dotenv.config({ path: ".env" });
const app = express();

//Allow CORS access for PORT 5000
app.use(cors());

// Use common 3rd-party middlewares
app.use(express.json());

// Use routers
app.use("/", homeRouter);
app.use("/api/v1/weather", weatherRouter);
app.use("/api/v1/users", userRouter);

export default app;
