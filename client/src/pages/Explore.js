import { Popup } from 'react-map-gl';
import ReactMapGL, { GeolocateControl, Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import useGeolocation from "../components/geoLocation";



function Explore() {
  const location = useGeolocation()

  { location.loaded ? JSON.stringify(location) && console.log(JSON.stringify(location)) : "Location data not available yet." }

  return (
    <>

      <ReactMapGL
        initialViewState={{
          longitude: location.coordinates.lon,
          latitude: location.coordinates.lat,
          zoom: 5
        }}
        style={{ width: '100vw', height: '100vh' }}
        mapStyle="mapbox://styles/ianjustinferris/cl1ya9otw001515qmp86s6l21"
        mapboxAccessToken='pk.eyJ1IjoiaWFuanVzdGluZmVycmlzIiwiYSI6ImNsNmdxNmRkNDA2Z2IzaW53ZmZoZDU0NHgifQ.Pcg0JsdtFLHvd2EWFI4_mA'
      >;
        <GeolocateControl />
      </ReactMapGL>


      <Footer />
    </>)
};

export default Explore
