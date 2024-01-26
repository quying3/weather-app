import express from "express";
import { getGeoLocation } from "#services/getGeoLocation.js";
import getCurrentWeather from "#services/getCurrentWeather.js";
const router = express.Router();

// ex: weather/coord?lat=37.3541132&lon=-121.955174
router.get("/coord", async (req, res) => {
  const latitude = req.query.lat;
  const longitude = req.query.lon;
  const weather = await getCurrentWeather({
    lat: latitude,
    lon: longitude,
  });
  res.send(weather);
});

// ex: /weather/city?name=Santa Clara
router.get("/city", async (req, res) => {
  const locations = await getGeoLocation(req.query.name);
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

export default router;
