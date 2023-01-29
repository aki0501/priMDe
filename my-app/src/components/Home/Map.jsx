import React, { useState, useRef, useEffect } from "react";
import mapboxgl, { Marker } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoiemlubmlha3dhbiIsImEiOiJjbGRnbDI2d2MwczhvM29wZXJnc2c1MG1lIn0.AGCHa2V8FnHpXxKw0MDwiw';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-118.11);
  const [lat, setLat] = useState(34.38);
  const [zoom, setZoom] = useState(9);

  const bounds = [
    [-119.5, 33.70], // [west, south]
    [-117.75, 34.75]  // [east, north]
  ];

  const markersList = [
    { coordinates: [-118.4522489, 34.0628177], color: "#FF0000" },
    { coordinates: [-118.5522489, 34.1628177], color: "#00FF00" },
    { coordinates: [-118.6522489, 34.2628177], color: "#0000FF" }
  ]

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
      maxBounds: bounds
    });
    markersList.forEach((marker) => {
      return new mapboxgl.Marker({
        color: marker.color
      }).setLngLat(marker.coordinates).addTo(map.current)
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  // const marker1 = new mapboxgl.Marker()
  //   .setLngLat([34.827663, -117.659041])
  //   .addTo(map);

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );

}


