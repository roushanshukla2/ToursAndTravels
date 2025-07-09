import React from 'react';
import '../styles/InternationalDestination.css';

const destinations = [
  { href: "/international-trips/europe-tour-packages", ariaLabel: "Europe Tour Packages" },
  { href: "/international-trips/asia-tour-packages", ariaLabel: "Asia Tour Packages" },
  { href: "/international-trips/usa-tour-packages", ariaLabel: "USA Tour Packages" },
  { href: "/international-trips/australia-tour-packages", ariaLabel: "Australia Tour Packages" },
  { href: "/international-trips/africa-tour-packages", ariaLabel: "Africa Tour Packages" },
  { href: "/international-trips/middle-east-tour-packages", ariaLabel: "Middle East Tour Packages" },
  { href: "/international-trips/south-america-tour-packages", ariaLabel: "South America Tour Packages" },
  { href: "/international-trips/canada-tour-packages", ariaLabel: "Canada Tour Packages" },
  { href: "/international-trips/japan-tour-packages", ariaLabel: "Japan Tour Packages" },
  { href: "/international-trips/antarctica-tour-packages", ariaLabel: "Antarctica Tour Packages" },
];


const InternationalDestination = () => {
  return (
    <div className="destination-section">
      <div className="destination-title"><h1>Destinations</h1></div>
      <div className="destination-card-wrapper">
        {destinations.map((dest, index) => (
          <a key={index} aria-label={dest.ariaLabel} href={dest.href}>
            <div className="card-container">
              <div className="card-content"></div>
              <div className="card-gradient-overlay"></div>
              <div className="card-shimmer-placeholder"></div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default InternationalDestination;
