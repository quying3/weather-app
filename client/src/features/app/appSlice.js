import { getLocation } from '@/utils/getCurrentLocation';
import { getDate } from '@/utils/getCurrentDate';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGeoLocation = createAsyncThunk(
  'app/fetchGeoLocation',
  async () => {
    const coords = await getLocation();
    return { lat: coords.latitude, lon: coords.longitude };
  }
);

const initialState = {
  loading: true,
  coords: null,
  error: null,
  date: null
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setDate: state => {
      const date = getDate();
      state.date = date;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGeoLocation.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGeoLocation.fulfilled, (state, action) => {
        state.loading = false;
        state.coords = action.payload;
      })
      .addCase(fetchGeoLocation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.coords = null; // Reset or leave as the last known location based on your app's needs
      });
  }
});

export const { setDate } = appSlice.actions;

export default appSlice.reducer;
