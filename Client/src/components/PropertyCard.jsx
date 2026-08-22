import React from "react";

const PropertyCard = ({ property, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '12px', width: '220px', cursor: 'pointer' }}
    >
      <img
        src={property.image}
        alt={property.title}
        style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '6px' }}
      />
      <h3>{property.title}</h3>
      <p>{property.location}</p>
      <p><strong>${property.price.toLocaleString()}</strong></p>
    </div>
  );
};

export default PropertyCard;