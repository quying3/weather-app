import sendRequest from '@/utils/sendRequest';

const getCurrentWeather = async location => {
  const { lat, lon } = location;
  const response = await sendRequest({
    url: `http://localhost:4000/weather/coord?lat=${lat}&lon=${lon}`,
    method: 'GET'
  });
  if (response === 'error') {
    return 'error';
  }
  //   console.log(response.current);
  const weather = {
    temp: response.current.temp,
    weather: response.current.weather[0].description,
    icon: response.current.weather[0].icon
  };
  return weather;
};

const getCurrentLocation = async location => {
  const { lat, lon } = location;
  const response = await sendRequest({
    url: `http://localhost:4000/location/coord?lat=${lat}&lon=${lon}`,
    method: 'GET'
  });
  if (response === 'error') {
    return 'error';
  }
  const curLocation = {
    name: response[0].name,
    state: response[0].state
  };
  //   console.log(response[0]);
  return curLocation;
};

export { getCurrentWeather, getCurrentLocation };
