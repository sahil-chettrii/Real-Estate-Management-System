import React, { useState } from 'react';
import properties from './assets/data.js';
import PropertyCard from './components/PropertyCard.jsx';
import Header from './components/Header.jsx';
import PropertyDetail from './components/PropertyDetail.jsx';
import AddPropertyForm from './components/AddPropertyForm.jsx';
import "./components/Style/App.css";

const App = () => {
  const [query, setQuery] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [allProperties, setAllProperties] = useState(properties);

  const filteredProperties = allProperties.filter((property) =>
    property.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Header onAddClick={() => setIsFormOpen(true)} />

      <input
        type="text"
        placeholder="Search by title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />

      <div className="property-grid">
        {filteredProperties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onClick={() => setSelectedProperty(property)}
          />
        ))}
      </div>

              {selectedProperty && (
  <PropertyDetail
    property={selectedProperty}
    onClose={() => setSelectedProperty(null)}
    onDelete={(id) => {
      setAllProperties(allProperties.filter((p) => p.id !== id));
      setSelectedProperty(null);
    }}
  />
)}

      {isFormOpen && (
        <AddPropertyForm
          onClose={() => setIsFormOpen(false)}
          onAdd={(newProperty) => {
            const propertyWithId = {
              ...newProperty,
              id: `EST-${Date.now()}`,
              image: properties[0].image,
            };
            setAllProperties([propertyWithId, ...allProperties]);
          }}
        />
      )}
    </div>
  );
};

export default App;