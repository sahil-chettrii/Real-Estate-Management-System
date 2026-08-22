import React from "react";
import "./Style/PropertyDetail.css";
const PropertyDetail = ({ property, onClose }) => {
  return (
    <div className="overlay">
      <div className="detail-card">
        <button className="close-btn" onClick={onClose}>Close</button>
        <img src={property.image} alt={property.title} />
        <h2>{property.title}</h2>
        <p>{property.location}</p>
        <p>{property.beds} bed · {property.baths} bath · {property.area} sqft</p>
        <p><strong>${property.price.toLocaleString()}</strong></p>
      </div>
    </div>
  );
};

export default PropertyDetail;