import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

import '@/styles/Current.css';

const Current = () => {
  const { date } = useSelector(state => state.app);
  const [temp, setTemp] = useState(true);
  const {
    weather,
    status: weatherStatus,
    error: weatherError
  } = useSelector(state => state.weather);

  const {
    location,
    status: locationStatus,
    error: locationError
  } = useSelector(state => state.location);

  const celcius = useMemo(() => {
    if (weather) {
      let c = ((weather.temp - 32) * 5) / 9;
      return c.toFixed(2);
    }
  }, [weather]);

  return (
    <div className="current-weather-container">
      <h2 className="current-weather-header">CURRENT WEATHER</h2>
      {(weatherStatus !== 'succeeded' || locationStatus !== 'succeeded') && (
        <p>Loading weather data...</p>
      )}
      {(weatherError || locationError) && (
        <p>{weatherError || locationError}</p>
      )}
      {weatherStatus === 'succeeded' && locationStatus === 'succeeded' && (
        <div className="weather-card">
          <div>
            <p>
              Location: {location.name}, {location.state}
            </p>
            <p>Date: {date}</p>
          </div>
          <div>
            <p onClick={() => setTemp(!temp)}>
              temprature: {temp ? `${weather.temp}°F` : `${celcius}°C`}
            </p>
            <p>weather: {weather.weather}</p>
          </div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          ></img>
        </div>
      )}
    </div>
  );
};

export default Current;
