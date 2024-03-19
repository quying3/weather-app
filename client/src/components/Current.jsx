import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

import styles from '@/styles/Current.module.css';

const Current = () => {
  const { date } = useSelector(state => state.app);
  const [temp, setTemp] = useState(true);
  const {
    current,
    status: weatherStatus,
    error: weatherError
  } = useSelector(state => state.weather);

  const {
    location,
    status: locationStatus,
    error: locationError
  } = useSelector(state => state.location);

  const celcius = useMemo(() => {
    if (current) {
      let c = ((current.temp - 32) * 5) / 9;
      return c.toFixed(2);
    }
  }, [current]);

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>CURRENT WEATHER</h2>
      {(weatherStatus !== 'succeeded' || locationStatus !== 'succeeded') && (
        <p>Loading weather data...</p>
      )}
      {(weatherError || locationError) && (
        <p>{weatherError || locationError}</p>
      )}
      {weatherStatus === 'succeeded' && locationStatus === 'succeeded' && (
        <div className={styles.card}>
          <div>
            <p>
              Location: {location.name}, {location.state}
            </p>
            <p>Date: {date}</p>
          </div>
          <div>
            <p onClick={() => setTemp(!temp)}>
              temprature: {temp ? `${current.temp}°F` : `${celcius}°C`}
            </p>
            <p>weather: {current.weather}</p>
          </div>
          <img
            src={`https://openweathermap.org/img/wn/${current.icon}@2x.png`}
          ></img>
        </div>
      )}
    </div>
  );
};

export default Current;
