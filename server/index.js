import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import locationRoute from "./src/routes/Location.js";
import weatherRoute from "./src/routes/Weather.js";

app.use("/weather", weatherRoute);
app.use("/location", locationRoute);

app.listen("4000", () => {
  console.log("server running on port 4000");
});
