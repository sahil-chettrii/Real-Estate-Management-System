import React from "react";
import "./Style/PropertyCard.css";
const PropertyCard = ({ property, onClick }) => {
  return (
    <div className="property-card" onClick={onClick}>
      <img src={property.image} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.location}</p>
      <p><strong>${property.price.toLocaleString()}</strong></p>
    </div>
  );
};

export default PropertyCard;