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
  weather: null,
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
        state.weather = action.payload.weatherData;
        state.error = null;
      })
      .addCase(fetchWeatherByGeo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default weartherSlice.reducer;
