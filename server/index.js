import express from "express";
import getGeoLocation from "./src/services/getGeoLocation.js";
import dotenv from "dotenv";
import getCurrentWeather from "./src/services/getCurrentWeather.js";
dotenv.config({ path: "./src/configs/.env" });

const app = express();

app.get("/hello", async (req, res) => {
  const locationInfo = await getGeoLocation("Dallas");
  const currentWeatherInfo = await getCurrentWeather(locationInfo);
  res.send(JSON.stringify(currentWeatherInfo));
});

app.listen("4000", () => {
  console.log("server running on port 4000");
});
