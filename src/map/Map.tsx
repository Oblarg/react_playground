import React, { useState } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './Map.css'

export const MapPage = () => {

  return (
    <Map center={[50, 10]}
    zoom={6}
    maxZoom={10}
    attributionControl={true}
    zoomControl={true}
    doubleClickZoom={true}
    scrollWheelZoom={true}
    dragging={true}
    animate={true}
    easeLinearity={0.35}
  >
    <TileLayer
      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    />
    <Marker position={[50, 10]}>
      <Popup>
        Popup for any custom information.
      </Popup>
    </Marker>
    </Map>
  )
}
