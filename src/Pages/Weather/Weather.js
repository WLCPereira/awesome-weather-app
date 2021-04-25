/* eslint-disable no-unused-vars */
import { useState, useCallback, useMemo } from 'react';
import { getRoundLocations } from 'Services';

export default function WeatherFactory({ props }) {
  const {
    history,
    location: { state },
  } = props;
  const [map, setMap] = useState();
  const [isLoading, setLoading] = useState(true);
  const [locales, setLocales] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});

  const chooseLocation = useCallback(
    (id, position) => {
      let filter = locales.filter((loc) => {
        if (id) {
          return loc.id === id;
        }
        return loc.coord.lat === position.lat && loc.coord.lon === position.lon;
      });
      setSelectedLocation(filter[0]);
    },
    [locales, setSelectedLocation],
  );

  function initialEffect() {
    getRoundLocations(state).then((response) => {
      const { list } = response.data;
      setLocales(list);
      setLoading(false);
    });
  }

  function mapEffect() {
    if (Object.keys(selectedLocation).length && Object.keys(map).length) {
      let { coord } = selectedLocation;
      map.flyTo({ lat: coord.lat, lng: coord.lon }, 13);
    }
  }

  const handleSelect = (evt) => {
    chooseLocation(evt.target.value);
  };

  const onMapLoad = (mapParams) => {
    setMap(mapParams);
  };

  const eventHandlers = useMemo(
    () => ({
      click(evt) {
        let { lat, lng } = evt.target.getLatLng();
        chooseLocation(null, { lat, lon: lng });
      },
    }),
    [chooseLocation],
  );

  const backEvent = () => {
    history.goBack();
  };

  return {
    states: {
      isLoading,
      locales,
      selectedLocation,
      map,
    },
    effects: {
      initialEffect,
      mapEffect,
    },
    events: {
      eventHandlers,
      handleSelect,
      onMapLoad,
      backEvent,
    },
  };
}
