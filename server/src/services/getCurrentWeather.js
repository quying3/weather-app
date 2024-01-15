import { API_KEY } from "../config/index.js";
import sendRequest from "../utls/sendRequest.js";

// const getCurrentWeather = async ({ ...location }) => {
//   let data = await sendRequest({
//     url: `https://api.openweathermap.org/data/3.0/onecall?lat=${location.lat}&lon=${location.lon}&appid=${process.env.appid}`,
//   });
//   return data;
// };

const getCurrentWeather = async (location) => {
  const { lat, lon } = location;
  console.log(lat, lon);
  const part = "minutely,hourly,daily";
  const weather = await sendRequest({
    url: `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API_KEY}`,
  });
  // console.log(weather);
  return weather;
};

export default getCurrentWeather;
