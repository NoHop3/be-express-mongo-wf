import mongoose from "mongoose";

const weatherSchema = new mongoose.Schema({
  city: String,
  country: String,
  avgTemp: Number,
  minTemp: Number,
  maxTemp: Number,
  humidity: Number,
  pressure: Number,
  wind: Number,
  description: String,
  picture: String,
  updatedAt: String,
  status: String,
});

export default mongoose.model("Weather", weatherSchema, "weather");