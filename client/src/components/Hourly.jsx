import React from 'react';
import { useSelector } from 'react-redux';

const Hourly = () => {
  const {
    hourly,
    status: weatherStatus,
    error: weatherError
  } = useSelector(state => state.weather);
  return (
    <div>
      {weatherStatus !== 'succeeded' && <p>Loading weather data...</p>}
      {weatherError && <p>{weatherError}</p>}
      {weatherStatus === 'succeeded' && (
        <div>
          <div>
            <h2>{hourly[0].dt}</h2>
            <p>{hourly[0].temp}</p>
            <img
              src={`https://openweathermap.org/img/wn/${hourly[0].icon}@2x.png`}
            ></img>
          </div>
          <div>
            <h2>{hourly[1].dt}</h2>
            <p>{hourly[1].temp}</p>
            <img
              src={`https://openweathermap.org/img/wn/${hourly[1].icon}@2x.png`}
            ></img>
          </div>
          <div>
            <h2>{hourly[2].dt}</h2>
            <p>{hourly[2].temp}</p>
            <img
              src={`https://openweathermap.org/img/wn/${hourly[2].icon}@2x.png`}
            ></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hourly;
