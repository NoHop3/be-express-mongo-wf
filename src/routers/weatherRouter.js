import { Router } from "express";
import { getAllWeather } from "../controllers/weatherController.js";

const router = Router();

router.get("/", getAllWeather);

export default router;