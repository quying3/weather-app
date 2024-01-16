import sendRequest from "../utls/sendRequest.js";
import { API_KEY } from "../config/index.js";

const getGeoLocation = async (city) => {
  const limit = 5;
  let response = await sendRequest({
    url: `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${API_KEY}`,
  });
  // console.log(response);
  let locations = response.map((location) => {
    if (location.local_names) {
      delete location.local_names;
    }
    return location;
  });
  // console.log(locations);
  return locations;
};

const getLocationName = async (location) => {
  const { lat, lon } = location;
  const limit = 5;
  let response = await sendRequest({
    url: `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=${limit}&appid=${API_KEY}`,
  });
  // console.log(response);
  let locations = response.map((location) => {
    if (location.local_names) {
      delete location.local_names;
    }
    return location;
  });
  // console.log(locations);
  return locations;
};

export { getGeoLocation, getLocationName };
