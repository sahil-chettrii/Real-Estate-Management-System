import React from "react";

const Header = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0' }}>
      <h1>Estoria</h1>
      <button style={{ padding: '10px 18px', borderRadius: '8px', border: 'none', background: '#2F4538', color: 'white', cursor: 'pointer' }}>
        + Add listing
      </button>
    </div>
  );
};

export default Header;