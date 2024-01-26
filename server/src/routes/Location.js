import express from "express";
import { getGeoLocation, getLocationName } from "#services/getGeoLocation.js";
const router = express.Router();

// ex: /location/city?name=Santa Clara
router.get("/city", async (req, res) => {
  // const locations = await getGeoLocation("Santa Clara");
  const locations = await getGeoLocation(req.query.name);
  res.send(locations);
});

// ex: /location/coord?lat=37.3541132&lon=-121.955174
router.get("/coord", async (req, res) => {
  // const locations = await getGeoLocation("Santa Clara");
  const locations = await getLocationName({
    lat: req.query.lat,
    lon: req.query.lon,
  });
  res.send(locations);
});

export default router;
