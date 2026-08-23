import React, { useState } from "react";
import "./Style/AddPropertyForm.css";
  const AddPropertyForm = ({ onClose, onAdd, editingProperty }) => {
 const [title, setTitle] = useState(editingProperty?.title || '');
const [location, setLocation] = useState(editingProperty?.location || '');
const [price, setPrice] = useState(editingProperty?.price || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, location, price: Number(price) });
    onClose();
  };

  return (
    <div className="overlay">
      <form className="form-card" onSubmit={handleSubmit}>
       <h2>{editingProperty ? 'Edit Listing' : 'New Listing'}</h2>        <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
        <input placeholder="Price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <div className="form-actions">
          <button type="button" onClick={onClose}>Cancel</button>
          <button type="submit">{editingProperty ? 'Save' : 'Add'}</button>
         </div>
      </form>
    </div>
  );
};

export default AddPropertyForm;