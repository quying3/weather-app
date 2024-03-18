import React from 'react';
import Current from '@/components/current';
import Air from './components/Air';
import { fetchGeoLocation, setDate } from '@/features/app/appSlice';
import { fetchLocationByGeo } from '@/features/location/locationSlice';
import { fetchWeatherByGeo } from '@/features/weather/weatherSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const page = () => {
  const dispatch = useDispatch();
  const { coords, error, loading } = useSelector(state => state.app);
  useEffect(() => {
    dispatch(setDate());
    dispatch(fetchGeoLocation());
  }, [dispatch]);
  // Effect to react to changes in coords
  useEffect(() => {
    if (coords) {
      console.log(coords); // Now coords will have the updated value
      dispatch(fetchLocationByGeo(coords));
      dispatch(fetchWeatherByGeo(coords));
    }
  }, [coords, dispatch]); // React to changes in coords

  if (loading) {
    return <div>Loading location...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Current />
      <Air />
    </div>
  );
};

export default page;
