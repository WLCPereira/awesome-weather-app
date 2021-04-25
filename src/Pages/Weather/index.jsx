/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'leaflet';
import {
  Grid,
  Paper,
  MenuItem,
  Box,
  Typography,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { locationPin } from 'Assets';
import { Map, Mapmarker, Select, LoadingFrame } from 'Components';
import WeatherFactory from './Weather';
import { toCelsius, numToString, icons } from './utils';
import useStyles from './styles';

const customIcon = new Icon({
  iconUrl: locationPin,
  iconSize: [36, 36],
  iconAnchor: [22, 32],
  popupAnchor: [-3, -30],
});

export default function Weather(props) {
  const { location } = props;
  const classes = useStyles();
  const { states, effects, events } = WeatherFactory({
    props,
  });
  const { isLoading, locales, selectedLocation, map } = states;
  const { initialEffect, mapEffect } = effects;
  const { eventHandlers, handleSelect, onMapLoad, backEvent } = events;

  // renders Selec component changes value when selectedLocale's value changes.
  const renderSelect = useMemo(() => {
    if (!locales.length) return null;
    return (
      <Select
        labelId="label-select-location"
        id="select-location"
        label="Select a locale"
        value={selectedLocation.id || ''}
        onChange={handleSelect}
      >
        {locales.map((loc) => (
          <MenuItem key={loc.id} value={loc.id}>
            {loc.name}
          </MenuItem>
        ))}
      </Select>
    );
  }, [locales, selectedLocation]);

  // renders markers inside the Map
  const renderMarkers = useMemo(() => {
    return locales.map((locale, index) => (
      <Mapmarker
        key={locale.id}
        position={{ ...locale.coord, lng: locale.coord.lon }}
        popupText={locale.name}
        customIcon={customIcon}
        eventHandlers={eventHandlers}
      />
    ));
  }, [locales, eventHandlers]);

  // renders Weather information, StatusNull or LoadingFrame
  const renderWeatherInfo = useMemo(() => {
    if (isLoading) {
      return <LoadingFrame />;
    }
    if (!Object.keys(selectedLocation).length) {
      return (
        <Box className={classes.weatherInfoBoxStatusNull}>
          <Box>
            <Typography variant="h6">There is no location selected</Typography>
            <Typography>
              Please, select a location on top page or reach some pin inside the
              map to get weather information.
            </Typography>
          </Box>
        </Box>
      );
    }
    const { main, weather } = selectedLocation;
    let temp = numToString(toCelsius(main.temp));
    let min = numToString(toCelsius(main.temp_min));
    let max = numToString(toCelsius(main.temp_max));
    let { icon, description } = weather[0];
    return (
      <Box as="div" className={classes.weatherInfoBox_body}>
        <Paper className={classes.weatherPaperTemp}>
          <Box as="div" className={classes.weatherPaperTemp_header}>
            <Typography color="primary" variant="subtitle1">
              Temp
            </Typography>
          </Box>
          <Box as="div" className={classes.weatherPaperTemp_content}>
            <Typography className={classes.weatherPaperTemp_content_main}>
              {temp}°C
            </Typography>
            <Box as="div" className={classes.weatherPaperTemp_content_minMax}>
              <Typography color="primary" variant="subtitle1">
                Min
              </Typography>
              <Typography>{min}°C</Typography>
            </Box>
            <Box as="div" className={classes.weatherPaperTemp_content_minMax}>
              <Typography color="primary" variant="subtitle1">
                Max
              </Typography>

              <Typography>{max}°C</Typography>
            </Box>
          </Box>
          <Box as="div" className={classes.weatherPaperTemp_content}>
            <img
              src={icons[icon]}
              className={classes.weatherPaperTemp_content_img}
              alt={description}
            />
          </Box>
        </Paper>
      </Box>
    );
  }, [selectedLocation, isLoading]);

  // loads locales value. An array with 15 locale objects
  useEffect(initialEffect, []);
  useEffect(mapEffect, [map, selectedLocation]);

  return (
    <Grid container className={classes.weatherContainer} spacing={0}>
      <Grid item className={classes.weatherMapGrid} xs={12}>
        <Map
          center={location.state}
          style={{ width: '100%', height: '100%' }}
          zoom={8}
          whenCreated={onMapLoad}
        >
          {renderMarkers}
        </Map>
      </Grid>
      <Grid className={classes.weatherInfoGrid}>
        <Paper className={classes.weatherInfoPaper}>
          <Box as="div" className={classes.weatherInfoBox}>
            <Box as="div" className={classes.weatherInfoBox_header}>
              <Tooltip title="back">
                <IconButton aria-label="back" onClick={backEvent}>
                  <ArrowBack />
                </IconButton>
              </Tooltip>
              {renderSelect}
            </Box>
            {renderWeatherInfo}
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

Weather.propTypes = {
  location: PropTypes.object.isRequired,
};
