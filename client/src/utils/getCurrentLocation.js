// export const onSuccess = position => ({
//   latitude: position.coords.latitude,
//   longitude: position.coords.longitude
// });

// export const onError = () => 'Unable to retrieve your location';

// export const getLocation = (onSuccess, onError) => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(onSuccess, onError);
//   } else {
//     console.log('Geolocation not supoorted');
//   }
// };
// wrap with Promise
export const getLocation = () => {
  return new Promise((resolve, reject) => {
    const onSuccess = position => {
      const { latitude, longitude } = position.coords;
      resolve({ latitude, longitude });
    };

    const onError = error => {
      reject(error.message || 'Unable to retrieve your location');
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
      reject('Geolocation is not supported by this browser.');
    }
  });
};
