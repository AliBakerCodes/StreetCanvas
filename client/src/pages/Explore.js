import { Popup } from 'react-map-gl';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";


function Explore() {
  const [pegs, setPegs] = useState([])
  useEffect(() => {
    const getPegs = async () => {
      try {
        const res = await axios.get("/pegs")
        setPegs(res.data)
      } catch (err) {
        console.log('error in useEffect')
      }
    };
    getPegs();
  }, [])
  return (
    <>
      <Map
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5
        }}
        style={{ width: '100vw', height: '100vh' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken='pk.eyJ1IjoiaWFuanVzdGluZmVycmlzIiwiYSI6ImNsNmdxNmRkNDA2Z2IzaW53ZmZoZDU0NHgifQ.Pcg0JsdtFLHvd2EWFI4_mA'
      >;
        {pegs.map(p => (
          <>
            <Marker
              longitude={p.lon}
              latitude={p.lat}
              anchor="bottom" >

              <PlaceIcon />
            </Marker>
            <Popup longitude={p.lon} latitude={p.lat}
              anchor="top"
            >
              <div className="card">
                <label className='userName'>USERNAME:</label>
                <label className='title'>TITLE:</label>
                <img className='thumbnail' src='' alt='robot' />
                <label className='lat/lon'>LAT/LON:</label>
              </div>
            </Popup>
          </>
        ))}
      </Map>
      <Footer />
    </>)
};

export default Explore
