import { API_KEY } from "#config/index.js";
import sendRequest from "#utls/sendRequest.js";

const getCurrentWeather = async (location) => {
  const { lat, lon } = location;
  // console.log(lat, lon);
  // const part = "minutely,hourly,daily";
  const part = "minutely";
  const weather = await sendRequest({
    url: `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=${part}&appid=${API_KEY}`,
  });
  const convertHour = weather.hourly.map((el) => {
    const myUnitTimeStamp = el.dt;
    const myDate = new Date(myUnitTimeStamp * 1000);
    return { ...el, myDate: myDate };
  });
  return { ...weather, hourly: convertHour };
};

export default getCurrentWeather;
