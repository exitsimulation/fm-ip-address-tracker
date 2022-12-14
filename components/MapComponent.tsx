import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import React from "react";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import "leaflet/dist/leaflet.css";

import { IMapComponentProps } from "../user";

const MapComponent = ({ className, position }: IMapComponentProps) => {
  return (
    <MapContainer
      center={position}
      zoom={5}
      scrollWheelZoom={true}
      className={className}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          This is your estimated location. <br />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
