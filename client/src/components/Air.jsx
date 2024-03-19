import React from 'react';
import { useSelector } from 'react-redux';
import styles from '@/styles/Air.module.css';
import {
  WiStrongWind,
  WiHumidity,
  WiCloud,
  WiThermometer
} from 'react-icons/wi';

const Air = () => {
  const {
    air,
    status: weatherStatus,
    error: weatherError
  } = useSelector(state => state.weather);
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Air Conditions</h2>
      {weatherStatus !== 'succeeded' && <p>Loading weather data...</p>}
      {weatherError && <p>{weatherError}</p>}
      {weatherStatus === 'succeeded' && (
        <div className={styles.card}>
          <div>
            <span className={styles.sub}>
              Real Feel
              <WiThermometer />
            </span>
            <p>{air.feelsLike}</p>
          </div>
          <div>
            <span className={styles.sub}>
              Wind
              <WiStrongWind />
            </span>
            <p>{air.windSpeed}</p>
          </div>
          <div>
            <span className={styles.sub}>
              Coulds <WiCloud />
            </span>
            <p>{air.clouds}%</p>
          </div>
          <div>
            <span className={styles.sub}>
              Humidity <WiHumidity />
            </span>
            <p>{air.humidity}%</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Air;
