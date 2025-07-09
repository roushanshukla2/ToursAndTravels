import React from 'react';
import '../styles/InternationalBestSellerPackages.css'; // ✅ Ensure this CSS file exists
import europeCard from '../assets/europe_card.webp'; // ✅ Proper image import

const trips = [
  {
    price: '₹17,999/- Onwards',
    img: europeCard,
    title: 'Spiti Backpacking - Bliss in Budget',
    duration: '6N/7D',
    route: 'Delhi - Delhi',
    dates: '6 Dec, 13 Dec',
  },
  {
    price: '₹1,69,990/- Onwards',
    img: europeCard,
    title: '11 Days European Pathways Community Trip',
    duration: '10N/11D',
    route: 'Paris - Prague',
    dates: '22 Dec',
  },
  {
    price: '₹1,44,990/- Onwards',
    img: europeCard,
    title: '8 Days European Trails Community Trip',
    duration: '7N/8D',
    route: 'Amsterdam - Prague',
    dates: '25 Dec',
  },
];

const InternationalBestSellerPackages = () => {
  return (
    <div className="International-upcoming-trips-container">
      <div className="International-community-header">
        <h2>Best Seller Packages</h2>
        <p>Find your perfect travel experience with our top-rated packages</p>
      </div>

      <div className="International-trip-packages">
        {[...trips, ...trips].map((trip, index) => (
          <div
            key={index}
            className="International-trip-card"
            data-price={trip.price}
          >
            <img src={trip.img} alt={trip.title} />
            <div className="International-trip-details">
              <h3>{trip.title}</h3>
              <p>{trip.duration}</p>
              <p>{trip.route}</p>
              <p>{trip.dates}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternationalBestSellerPackages;
