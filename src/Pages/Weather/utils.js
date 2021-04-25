import * as icon from 'Assets/icons';

export const toCelsius = (k) => k - 273.15;
export const numToString = (float) => {
  let browserLocale = navigator?.language?.toLowerCase();
  return float.toLocaleString(browserLocale || 'en-us', { format: 'best-fit' });
};
export const compareSize = (size, media) => {
  return media === size;
};
export const icons = {
  '01d': icon.clearDay,
  '01n': icon.clearNight,
  '02d': icon.partialCloudDay,
  '02n': icon.partialCloudNight,
  '03d': icon.scatteredCloud,
  '03n': icon.scatteredCloud,
  '04d': icon.brokenCloud,
  '04n': icon.brokenCloud,
  '09d': icon.showerRain,
  '09n': icon.showerRain,
  '10d': icon.rainDay,
  '10n': icon.rainNight,
  '11d': icon.thunderDay,
  '11n': icon.thunderNight,
  '13d': icon.snowDay,
  '13n': icon.snowNight,
  '50d': icon.mist,
  '50n': icon.mist,
};
