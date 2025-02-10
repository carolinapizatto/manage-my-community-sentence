
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ({ locations }: { locations: any[] }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Note: Replace with your Mapbox token
    mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-0.1276, 51.5074], // London coordinates
      zoom: 12
    });

    // Add markers for each location
    locations.forEach((location) => {
      const marker = new mapboxgl.Marker()
        .setLngLat([location.longitude, location.latitude])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h3>${location.name}</h3><p>${location.address}</p>`
          )
        )
        .addTo(map.current!);
    });

    return () => map.current?.remove();
  }, [locations]);

  return <div ref={mapContainer} className="w-full h-[400px] rounded-lg" />;
};

export default Map;
