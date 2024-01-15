import sendRequest from "../utls/sendRequest.js";
import { API_KEY } from "../config/index.js";

// const getGeoLocation = async (city) => {
//   let data = await sendRequest({
//     url: `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.appid}`,
//   });
//   let dataObj = { ...data[0] };
//   delete dataObj["local_names"];
//   return dataObj;
// };

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

export default getGeoLocation;
