import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import L from "leaflet";
import "leaflet-routing-machine";

const MapWithDirections = () => {
  useEffect(() => {
    const map = L.map("map").setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    // Replace 'your-mapbox-access-token' with your actual Mapbox access token
    L.Routing.control({
      waypoints: [L.latLng(51.5, -0.1), L.latLng(51.51, -0.12)],
      routeWhileDragging: true,
      router: L.Routing.mapbox(
        "pk.eyJ1Ijoia2hvYXBoYW0yMzExIiwiYSI6ImNscTJvMmt0cTAyMXYyaW85c3U2cDAza3cifQ.M5AuqhLQLl1bt8Ti_EwlNA"
      ),
    }).addTo(map);
  }, []);

  return (
    <div id="map" style={{ height: "100vh", width: "100%" }}>
      {/* Map will be rendered here */}
    </div>
  );
};

export default MapWithDirections;
