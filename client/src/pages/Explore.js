import { Popup } from 'react-map-gl';
import ReactMapGL, { GeolocateControl, Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import useGeolocation from "../components/geoLocation";


function Explore() {
  const location = useGeolocation()
  // <GeolocateControl
  //   style={geolocateControlStyle}
  //   positionOptions={{ enableHighAccuracy: true }}
  //   trackUserLocation={true}
  //   onGeolocate={(position) => {
  //     // get latitude and longitude of user current location
  //     setNewLocation([position.coords.latitude, position.coords.longitude]);
  //   }}
  // />

  // const [viewport, setViewport] = useState({
  //   latitude
  // })

  return (
    <>
      <ReactMapGL
        initialViewState={{
          longitude: location.lon,
          latitude: location.lat,
          zoom: 3.5
        }}
        style={{ width: '100vw', height: '100vh' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken='pk.eyJ1IjoiaWFuanVzdGluZmVycmlzIiwiYSI6ImNsNmdxNmRkNDA2Z2IzaW53ZmZoZDU0NHgifQ.Pcg0JsdtFLHvd2EWFI4_mA'
      >;

      </ReactMapGL>
      <div>{location.loaded ? JSON.stringify(location) : "Location data not available yet."}</div>
      <Footer />
    </>)
};

export default Explore
