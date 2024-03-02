import React, { useEffect, useState, useMemo } from 'react';
import { getLocation } from '@/utils/getCurrentLocation';
import {
  getCurrentWeather,
  getCurrentLocation
} from '@/services/getCurrentWeather';
import { getDate } from '@/utils/getCurrentDate';
import '@/styles/Current.css';

const Current = () => {
  const [geoLocation, setGeoLocation] = useState(null);
  const [location, setLocation] = useState(null);
  const [err, setErr] = useState(null);
  const [weather, setWeather] = useState(null);
  const [date, setDate] = useState(null);
  const [temp, setTemp] = useState(true);

  const handleSuccess = async position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    if (
      !geoLocation ||
      geoLocation[0] !== latitude ||
      geoLocation[1] !== longitude
    ) {
      setGeoLocation([latitude, longitude]);
      const locationData = await getCurrentLocation({
        lat: latitude,
        lon: longitude
      });
      const weatherData = await getCurrentWeather({
        lat: latitude,
        lon: longitude
      });
      setWeather(weatherData);
      setLocation(locationData);
      console.log('called on Success');
      console.log('weatherData', weatherData);
      console.log('locationData', locationData);
    }
  };

  const handleError = () => {
    setErr('Unable to retrieve your location');
  };

  useEffect(() => {
    setDate(getDate());
  }, []);

  useEffect(() => {
    getLocation(handleSuccess, handleError);
  }, [geoLocation]);

  const celcius = useMemo(() => {
    if (!weather) return;
    return ((weather.temp - 32) * 5) / 9;
  }, [weather]);

  return (
    <div className="current-weather-container">
      <h2 className="current-weather-header">CURRENT WEATHER</h2>
      {!geoLocation ? (
        <p>{err}</p>
      ) : !location && !weather ? (
        <p>Loading weather data...</p>
      ) : (
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
