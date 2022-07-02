import mongoose from "mongoose";

const weatherSchema = new mongoose.Schema({
  city: String,
  country: String,
  temperature: Number,
  humidity: Number,
  pressure: Number,
  windSpeed: Number,
  windDirection: String,
  description: String,
  icon: String,
  date: Date,
});

export default mongoose.model("Weather", weatherSchema, "weather");