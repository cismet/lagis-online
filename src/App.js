import React from 'react';
import './App.css';
import {Map} from "react-leaflet";
import {getLayersByName, MappingConstants} from 'react-cismap';
function App() {
  const zoom = 15;
  const layers = 'wupp-plan-live@90';
  const namedMapStyle = 'default';
  return (
    <div className="App">
      <Map
        style={{
        height: 600
      }}
        center={{
        lat: 51.26357182763206,
        lng: 7.176242149341344
      }}
        crs={MappingConstants.crs25832}
        zoomControl={true}
        attributionControl={false}
        dragging={true}
        keyboard={false}
        zoom={zoom}
        minZoom={5}
        maxZoom={16}>
        {getLayersByName(layers, namedMapStyle)}
        dd
      </Map>
    </div>
  );
}

export default App;
