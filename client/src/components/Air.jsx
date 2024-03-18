import React from 'react';
import { useSelector } from 'react-redux';
import '@/styles/Air.css';
import {
  WiStrongWind,
  WiHumidity,
  WiCloud,
  WiThermometer
} from 'react-icons/wi';

const Air = () => {
  const {
    weather,
    status: weatherStatus,
    error: weatherError
  } = useSelector(state => state.weather);
  return (
    <div className="current-air-container">
      <h2 className="current-air-header">Air Conditions</h2>
      {weatherStatus !== 'succeeded' && <p>Loading weather data...</p>}
      {weatherError && <p>{weatherError}</p>}
      {weatherStatus === 'succeeded' && (
        <div className="air-card">
          <div>
            <span className="air-sub">
              Real Feel
              <WiThermometer />
            </span>
            <p>{weather.feelsLike}</p>
          </div>
          <div>
            <span className="air-sub">
              Wind
              <WiStrongWind />
            </span>
            <p>{weather.windSpeed}</p>
          </div>
          <div>
            <span className="air-sub">
              Coulds <WiCloud />
            </span>
            <p>{weather.clouds}%</p>
          </div>
          <div>
            <span className="air-sub">
              Humidity <WiHumidity />
            </span>
            <p>{weather.humidity}%</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Air;
