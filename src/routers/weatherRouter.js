import { Router } from "express";
import { getAllWeather, getWeatherByCity, createWeather, updateWeatherByCity, deleteWeatherByCity } from "../controllers/weatherController.js";

const router = Router();

//GET ALL WEATHER
router.get("/", getAllWeather);

//GET WEATHER BY CITY
router.get("/:city", getWeatherByCity);

//CREATE WEATHER
router.post("/", createWeather);

//UPDATE WEATHER BY CITY
router.put("/:city", updateWeatherByCity);

//DELETE WEATHER BY CITY
router.delete("/:city", deleteWeatherByCity);

export default router;