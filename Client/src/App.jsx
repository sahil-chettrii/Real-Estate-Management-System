import React, { useState, useEffect } from 'react';
import properties from './assets/data.js';
import PropertyCard from './components/PropertyCard.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import PropertyDetail from './components/PropertyDetail.jsx';
import AddPropertyForm from './components/AddPropertyForm.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import "./components/Style/App.css";

const App = () => {
  const [query, setQuery] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProperty, setEditingProperty] = useState(null);

  const [allProperties, setAllProperties] = useState(() => {
    const saved = localStorage.getItem('estoria-properties');
    return saved ? JSON.parse(saved) : properties;
  });

  useEffect(() => {
    localStorage.setItem('estoria-properties', JSON.stringify(allProperties));
  }, [allProperties]);

  const filteredProperties = allProperties.filter((property) =>
    property.title.toLowerCase().includes(query.toLowerCase()) ||
    property.location.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Header onAddClick={() => setIsFormOpen(true)} />

      <section id="home">
        <Hero query={query} onQueryChange={setQuery} />
        <div className="property-grid">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onClick={() => setSelectedProperty(property)}
            />
          ))}
        </div>
      </section>

      <About />
      <Contact />

      {selectedProperty && (
        <PropertyDetail
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          onDelete={(id) => {
            setAllProperties(allProperties.filter((p) => p.id !== id));
            setSelectedProperty(null);
          }}
          onEdit={(property) => {
            setEditingProperty(property);
            setIsFormOpen(true);
            setSelectedProperty(null);
          }}
        />
      )}

      {isFormOpen && (
        <AddPropertyForm
          editingProperty={editingProperty}
          onClose={() => {
            setIsFormOpen(false);
            setEditingProperty(null);
          }}
          onAdd={(propertyData) => {
            if (editingProperty) {
              setAllProperties(
                allProperties.map((p) =>
                  p.id === editingProperty.id ? { ...p, ...propertyData } : p
                )
              );
            } else {
              const propertyWithId = {
                ...propertyData,
                id: `EST-${Date.now()}`,
                image: properties[0].image,
              };
              setAllProperties([propertyWithId, ...allProperties]);
            }
            setEditingProperty(null);
          }}
        />
      )}
    </div>
  );
};

export default App;