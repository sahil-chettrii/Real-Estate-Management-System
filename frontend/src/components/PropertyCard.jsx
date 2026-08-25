import React, { useRef, useEffect, useState } from "react";
import "./Style/PropertyCard.css";

const PropertyCard = ({ property, onClick }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`property-card ${isVisible ? 'visible' : ''}`}
      onClick={onClick}
    >
      <img src={property.image} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.location}</p>
      <p><strong>${property.price.toLocaleString()}</strong></p>
    </div>
  );
};

export default PropertyCard;