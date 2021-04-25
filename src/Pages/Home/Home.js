import { useState, useMemo, useCallback } from 'react';

export default function HomeFactory({ props }) {
  const { history } = props;
  const [isDragin, setDragin] = useState(true);
  const [position, setPosition] = useState({
    lat: -14.2400732,
    lng: -53.1805017,
  });

  function inititalEffect() {
    setDragin(true);
    return () => {
      setDragin(true);
    };
  }

  const eventHandlers = useMemo(
    () => ({
      dragend: (evt) => {
        const center = evt.target.getLatLng();
        setPosition(center);
        setDragin(false);
      },
      dragstart: () => {
        setDragin(true);
      },
    }),
    [],
  );

  const anchorToWeaher = useCallback(() => {
    history.push({
      pathname: '/weatherInfos',
      state: position,
    });
  }, [history, position]);

  return {
    states: {
      position,
      isDragin,
    },
    effects: {
      inititalEffect,
    },

    events: {
      eventHandlers,
      anchorToWeaher,
    },
  };
}
