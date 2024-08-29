import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Icon from "../../assets/stellplatz_icon.png"
 import * as stellplaetze from "../../../../api/sleepspots.js";

export default function Map() {
  const TOKEN = import.meta.env.VITE_MAP_KEY;
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div style={{width: "50vw", height:"50vh"}}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/klatschenderaffe2/cm0f3wi7s00ya01qy08bzexj6"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {stellplaetze.features.map(stellplatz => (
          <Marker
            key={stellplatz.properties.PARK_ID}
            latitude={stellplatz.geometry.coordinates[1]}
            longitude={stellplatz.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedPark(stellplatz);
              }}
            >
              <img src={Icon} alt="Van Icon" />
            </button>
          </Marker>
        ))}

        {selectedPark ? (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}