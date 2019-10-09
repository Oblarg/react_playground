import React, { useState } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

export const MapPage = () => {
  const position:[number, number] = [51.505, -0.09]

  return (
    <Map center={position} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
      </Marker>
    </Map>
  )
}
