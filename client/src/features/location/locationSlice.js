import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentLocation } from '@/services/getCurrentLocation.js';

export const fetchLocationByGeo = createAsyncThunk(
  '/location/fetchLocationByGeo',
  async geoLocation => {
    const locationData = await getCurrentLocation(geoLocation);
    return { locationData };
  }
);

const initialState = {
  location: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchLocationByGeo.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchLocationByGeo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.location = action.payload.locationData;
        state.error = null;
      })
      .addCase(fetchLocationByGeo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default locationSlice.reducer;
