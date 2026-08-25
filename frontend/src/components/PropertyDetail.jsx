import React from "react";
import "./Style/PropertyDetail.css";
import PropertyMap from "./PropertyMap.jsx";
const PropertyDetail = ({ property, onClose, onDelete, onEdit }) => {
  return (
    <div className="overlay">
      <div className="detail-card">
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={property.image} alt={property.title} />
        <h2>{property.title}</h2>
        <p>{property.location}</p>
        <p>{property.beds} bed · {property.baths} bath · {property.area} sqft</p>
        <p><strong>${property.price.toLocaleString()}</strong></p>

        <button onClick={() => onEdit(property)}>Edit</button>
        <button onClick={() => onDelete(property.id)}>Delete</button>
      </div>
    </div>
  );
};

export default PropertyDetail;