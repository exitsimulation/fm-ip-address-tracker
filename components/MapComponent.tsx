"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import React from "react";
import { LatLngExpression } from "leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import { IMapComponentProps } from "../user";

const MapComponent = ({ className }: IMapComponentProps) => {
  const position: LatLngExpression = {
    lat: 51.505,
    lng: -0.09,
  };

  return (
    <div className={className}>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className={className}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
