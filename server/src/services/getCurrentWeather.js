import { API_KEY } from "#config/index.js";
import sendRequest from "#utls/sendRequest.js";

const getCurrentWeather = async (location) => {
  const { lat, lon } = location;
  // console.log(lat, lon);
  const part = "minutely,hourly,daily";
  const weather = await sendRequest({
    url: `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=${part}&appid=${API_KEY}`,
  });
  // console.log(weather);
  return weather;
};

export default getCurrentWeather;
