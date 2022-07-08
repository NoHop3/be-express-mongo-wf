import Weather from "../models/Weather.js";
import weatherService from "../services/weatherService.js";

// GET /weather
export const getAllWeather = async (req, res, next) => {
  try {
    res.json(await weatherService.getAll());
  } catch (error) {
    next(error);
  }
};

// GET /weather/:city
export const getWeatherByCity = async (req, res, next) => {
  try {
    res.json(await weatherService.getWeatherByCity(req.params.city));
  } catch (error) {
    next(error);
  }
}

// POST /weather
export const createWeather = async (req, res, next) => {
  try {
    const weather = new Weather(req.body);
    res.json(await weatherService.createWeather(weather));
  } catch (error) {
    next(error);
  }
}

// PUT /weather/:city
export const updateWeatherByCity = async (req, res, next) => {
  try {
    res.json(await weatherService.updateWeatherByCity(req.params.city, req.body));
  } catch (error) {
    next(error);
  }
}

// DELETE /weather/:city
export const deleteWeatherByCity = async (req, res, next) => {
  try {
    res.json(await weatherService.deleteWeatherByCity(req.params.city));
  } catch (error) {
    next(error);
  }
}
