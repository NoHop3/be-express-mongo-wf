import Weather from "../models/Weather.js";

const getAll = async () => {
    return Weather.find();
}

// GET /weather:city
const getWeatherByCity = async (city) => {
    return Weather.findOne({ city: city });
}

// POST /weather
const createWeather = async (weather) => {
    const newWeather = new Weather(weather);
    return newWeather.save();
}

// PUT /weather/:city
const updateWeatherByCity = async (city, weather) => {
    return Weather.findOneAndUpdate({ city: city }, { $set: weather }, { returnNewDocument: true, upsert: true });
}

// DELETE /weather/:city
const deleteWeatherByCity = async (city) => {
    return Weather.findOneAndDelete({ city: city });
}

export default { getAll, getWeatherByCity, createWeather, updateWeatherByCity, deleteWeatherByCity };