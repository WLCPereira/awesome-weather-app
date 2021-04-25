/* eslint-disable react/prop-types */
import { forwardRef } from 'react';
import { Icon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import { locationRound } from 'Assets';

const mapIcon = new Icon({
  iconUrl: locationRound,
  iconSize: [36, 36],
  iconAnchor: [21, 32],
  popupAnchor: [-3, -30],
});

function Mapmarker(
  { popupText = 'You are here', customIcon = mapIcon, ...props },
  ref,
) {
  return (
    <Marker ref={ref} {...props} icon={customIcon}>
      <Popup>{popupText}</Popup>
    </Marker>
  );
}

export default forwardRef(Mapmarker);
