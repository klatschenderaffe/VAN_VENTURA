import React, { useState } from 'react'
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import './Map.css'
import * as stellplaetze from "../../../../api/sleepspots.js";

const Map = () => {

    const TOKEN = import.meta.env.VITE_MAP_KEY;

    const [viewport, setViewport] = useState({
        latitude: 28.6448,
        longitude: 77.216,
        zoom: 2,

    })

   

  return (
    <div style={{width: "50vw", height: "50vh"}} className='Map'>
      

      <ReactMapGL
      {...viewport} 
      mapboxAccessToken={TOKEN}
      width= "100%"
      height ="100%"
      transitionDuration= '200'
      mapStyle="mapbox://styles/klatschenderaffe2/cm0f3wi7s00ya01qy08bzexj6"
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
      >
        {stellplaetze.map((platz) => (
          <Marker key= {platz.id}
          latitude={platz.coordinats[1]}
          longitude={platz.coordinats[0]}>

          </Marker>
        ))}

      </ReactMapGL>
    </div>
  )
}

export default Map
