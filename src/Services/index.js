/* eslint-disable import/prefer-default-export */
import { create } from 'axios';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json, */*',
};

const OpenWeatherApi = create({
  baseURL: process.env.REACT_APP_OPENWEATHER_URL,
  headers,
});

export const getRoundLocations = (center) => {
  let { lat, lng: lon } = center;
  return OpenWeatherApi.get(`/find`, {
    params: {
      lat,
      lon,
      cnt: 15,
      appid: process.env.REACT_APP_OPENWEATHER_TOKEN,
    },
  });
};
