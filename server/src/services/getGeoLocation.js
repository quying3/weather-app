import sendRequest from "../utls/sendRequest.js";

const getGeoLocation = async (city) => {
  let data = await sendRequest({
    url: `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.appid}`,
  });
  let dataObj = { ...data[0] };
  delete dataObj["local_names"];
  return dataObj;
};
export default getGeoLocation;
