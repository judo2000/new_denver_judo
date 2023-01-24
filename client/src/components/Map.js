import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: 39.72781,
  lng: -105.00324,
};

function GMap() {
  console.log(process.env.NODE_ENV);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey:
      process.env.NODE_ENV === 'production'
        ? process.env.GOOGLE_MAPS_API_KEY
        : process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = React.useState(null);
  const zoom = 18;
  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    map.setZoom(zoom);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={20}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={{ lat: 39.72781, lng: -105.00324 }} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(GMap);
