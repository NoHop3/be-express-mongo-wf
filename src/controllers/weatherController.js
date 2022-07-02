import Weather from "../models/Weather.js";
import weatherService from "../services/weatherService.js";

// GET /products
export const getAllWeather = async (req, res, next) => {
  try {
    res.json(await weatherService.getAll());
  } catch (error) {
    next(error);
  }
};
