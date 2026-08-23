import React from "react";
import "./Style/Hero.css";

const Hero = ({ query, onQueryChange }) => {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="hero-eyebrow">Find your dream home</span>
        <h1>Discover a place<br />you'll love to live</h1>
        <p>Browse curated houses, villas, and apartments handpicked for you.</p>

        <div className="hero-search">
          <input
            type="text"
            placeholder="Search by title, city..."
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
          />
          <button>Search</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;