import Weather from "../models/Weather.js";

const getAll = async () => {
    return Weather.find();
}

export default { getAll };