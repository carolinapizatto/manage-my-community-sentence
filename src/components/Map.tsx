
import React from 'react';

const Map = ({ locations }: { locations: any[] }) => {
  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
      {/* Using an illustrative placeholder image */}
      <img 
        src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
        alt="Map visualization of locations"
        className="w-full h-full object-cover"
      />
      
      {/* Add location markers */}
      {locations.map((location, index) => (
        <div
          key={index}
          className="absolute w-6 h-6 -mt-3 -ml-3 bg-primary rounded-full border-2 border-white shadow-lg"
          style={{
            // Convert GPS coordinates to relative positions (approximate visualization)
            top: `${50 + (location.latitude - 51.5074) * 100}%`,
            left: `${50 + (location.longitude - (-0.1276)) * 100}%`,
          }}
        >
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white p-2 rounded shadow-lg text-xs whitespace-nowrap">
            {location.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Map;
