// src/components/InternationalBanner.jsx
import React from 'react';
import '../styles/InternationalBanner.css';

const InternationalBanner = () => {
  return (
    <div className="international-static-banner">
      <a
        aria-label="Explore Bali Tour Packages"
        target="_blank"
        className="static-banner"
        href="/international-trips/bali-tour-packages"
      ></a>
    </div>
  );
};

export default InternationalBanner;
