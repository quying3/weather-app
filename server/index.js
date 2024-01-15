import express from "express";
import getGeoLocation from "./src/services/getGeoLocation.js";
// import dotenv from "dotenv";
import getCurrentWeather from "./src/services/getCurrentWeather.js";
// dotenv.config({ path: "./src/configs/.env" });

const app = express();

// app.get("/hello", async (req, res) => {
//   const locationInfo = await getGeoLocation("Dallas");
//   const currentWeatherInfo = await getCurrentWeather(locationInfo);
//   res.send(JSON.stringify(currentWeatherInfo));
// });

// ex: /location?city=Santa Clara
app.get("/location", async (req, res) => {
  // const locations = await getGeoLocation("Santa Clara");
  const locations = await getGeoLocation(req.query.city);
  res.send(locations);
});

// ex: /weather/location?city=Santa Clara
app.get("/weather/location", async (req, res) => {
  const locations = await getGeoLocation(req.query.city);
  const pairs = locations.map((location) => {
    return {
      lat: location.lat,
      lon: location.lon,
    };
  });
  // console.log(pairs);
  const weather = await getCurrentWeather(pairs[0]);
  res.send(weather);
});

app.listen("4000", () => {
  console.log("server running on port 4000");
});
