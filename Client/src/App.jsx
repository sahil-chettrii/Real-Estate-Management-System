import React, { useState } from 'react';
import properties from './assets/data.js';
import PropertyCard from './components/PropertyCard.jsx';
import Header from './components/Header.jsx';

const App = () => {
  const [query, setQuery] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null);

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Header />

      <input
        type="text"
        placeholder="Search by title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '10px', width: '100%', maxWidth: '320px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #ccc' }}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {filteredProperties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onClick={() => setSelectedProperty(property)}
          />
        ))}
      </div>

      {selectedProperty && (
        <p style={{ marginTop: '20px' }}>
          You clicked: <strong>{selectedProperty.title}</strong>
        </p>
      )}
    </div>
  );
};

export default App;