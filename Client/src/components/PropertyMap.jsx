import React, { useState, useEffect } from "react";
import { GEOAPIFY_API_KEY } from "../apiKey.js";

const PropertyMap = ({ location }) => {
  const [mapUrl, setMapUrl] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCoordinates = async () => {
      setMapUrl(null);
      setError(false);

      try {
        const geoRes = await fetch(
          `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(location)}&apiKey=${GEOAPIFY_API_KEY}`
        );
        const geoData = await geoRes.json();

        const coords = geoData.features[0]?.geometry?.coordinates;
        if (!coords) {
          setError(true);
          return;
        }

        const [lon, lat] = coords;
        const staticMapUrl = `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=250&center=lonlat:${lon},${lat}&zoom=13&marker=lonlat:${lon},${lat};color:%232F4538;size:large&apiKey=${GEOAPIFY_API_KEY}`;

        setMapUrl(staticMapUrl);
      } catch (err) {
        setError(true);
      }
    };

    fetchCoordinates();
  }, [location]);

  if (error) {
    return <p style={{ fontSize: "13px", color: "#999" }}>Map unavailable</p>;
  }

  if (!mapUrl) {
    return <p style={{ fontSize: "13px", color: "#999" }}>Loading map...</p>;
  }

  return (
    <img
      src={mapUrl}
      alt={`Map of ${location}`}
      style={{ width: "100%", borderRadius: "10px", marginTop: "12px" }}
    />
  );
};

export default PropertyMap;