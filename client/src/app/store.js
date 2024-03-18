import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '@/features/weather/weatherSlice.js';
import locationReducer from '@/features/location/locationSlice.js';
import appReducer from '@/features/app/appSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    weather: weatherReducer,
    location: locationReducer
  }
});
