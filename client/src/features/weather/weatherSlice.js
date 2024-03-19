import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentWeather } from '@/services/getCurrentWeather.js';

export const fetchWeatherByGeo = createAsyncThunk(
  '/weather/fetchWeatherByGeo',
  async geoLocation => {
    const weatherData = await getCurrentWeather(geoLocation);
    console.log(weatherData);
    return { weatherData };
  }
);

const initialState = {
  current: null,
  air: null,
  hourly: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

const weartherSlice = createSlice({
  name: 'weather',
  initialState,
  reducres: {},
  extraReducers: builder => {
    builder
      .addCase(fetchWeatherByGeo.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchWeatherByGeo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { hourly, air, current } = action.payload.weatherData;
        state.hourly = hourly;
        state.air = air;
        state.current = current;
        state.error = null;
      })
      .addCase(fetchWeatherByGeo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default weartherSlice.reducer;
