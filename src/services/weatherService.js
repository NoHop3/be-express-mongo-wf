import Weather from "../models/Weather.js";

const getAll = async () => {
  return Weather.find();
};

// GET /weather:city
const getWeatherByCity = async (city) => {
  return Weather.findOne({ city: city });
};

// POST /weather
const createWeather = async (weather) => {
  if (weather.picture == "") {
    weather.picture =
      "https://img.freepik.com/premium-vector/autumn-mountains-landscape-with-tree-silhouettes-river-sunset_148087-293.jpg?w=2000";
  }
  const newWeather = new Weather(weather);
  return newWeather.save();
};

// PUT /weather/:city
const updateWeatherByCity = async (city, weather) => {
  const weatherToReturn = await Weather.findOne({ city: city });
  if (weather.picture == "") {
    weather.picture =
      "https://img.freepik.com/premium-vector/autumn-mountains-landscape-with-tree-silhouettes-river-sunset_148087-293.jpg?w=2000";
  }
  if (weatherToReturn) {
    weatherToReturn.set(weather);
    return await weatherToReturn.save();
  }
  return null;
};

// DELETE /weather/:city
const deleteWeatherByCity = async (city) => {
  return Weather.findOneAndDelete({ city: city });
};

export default {
  getAll,
  getWeatherByCity,
  createWeather,
  updateWeatherByCity,
  deleteWeatherByCity,
};
