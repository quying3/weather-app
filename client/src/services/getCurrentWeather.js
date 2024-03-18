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
  // console.log(response);
  const weather = {
    clouds: response.current.clouds,
    feelsLike: response.current.feels_like,
    windSpeed: response.current.wind_speed,
    humidity: response.current.humidity,
    temp: response.current.temp,
    weather: response.current.weather[0].description,
    icon: response.current.weather[0].icon
  };
  // console.log(weather);
  return weather;
};

export { getCurrentWeather };
