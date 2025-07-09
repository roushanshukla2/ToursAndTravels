import React, { useEffect, useState, useCallback } from 'react';
import '../styles/InternationalAllPackages.css'; 
import europeCard from '../assets/europe_card.webp'; // Image import

const allTrips = [
  {
    id: 1,
    price: '₹17,999/- Onwards',
    img: europeCard,
    title: 'Spiti Backpacking - Bliss in Budget',
    duration: '6N/7D',
    route: 'Delhi - Delhi',
    dates: '6 Dec, 13 Dec',
  },
  {
    id: 2,
    price: '₹1,69,990/- Onwards',
    img: europeCard,
    title: '11 Days European Pathways Community Trip',
    duration: '10N/11D',
    route: 'Paris - Prague',
    dates: '22 Dec',
  },
  {
    id: 3,
    price: '₹1,44,990/- Onwards',
    img: europeCard,
    title: '8 Days European Trails Community Trip',
    duration: '7N/8D',
    route: 'Amsterdam - Prague',
    dates: '25 Dec',
  },
  {
    id: 4,
    price: '₹2,10,000/- Onwards',
    img: europeCard,
    title: 'Swiss Alps Adventure',
    duration: '9N/10D',
    route: 'Zurich - Interlaken',
    dates: '12 Jan',
  },
  {
    id: 5,
    price: '₹89,000/- Onwards',
    img: europeCard,
    title: 'Bali Beach Retreat',
    duration: '5N/6D',
    route: 'Denpasar - Ubud',
    dates: '10 Nov, 20 Nov',
  },
  {
    id: 6,
    price: '₹1,35,000/- Onwards',
    img: europeCard,
    title: 'Japan Cherry Blossom Tour',
    duration: '7N/8D',
    route: 'Tokyo - Kyoto',
    dates: '15 Mar',
  },
  {
    id: 7,
    price: '₹1,20,000/- Onwards',
    img: europeCard,
    title: 'Vietnam Cultural Trail',
    duration: '6N/7D',
    route: 'Hanoi - Ho Chi Minh',
    dates: '5 Oct',
  },
  {
    id: 8,
    price: '₹1,80,000/- Onwards',
    img: europeCard,
    title: 'Greek Island Hopping',
    duration: '8N/9D',
    route: 'Athens - Santorini - Mykonos',
    dates: '8 Sep',
  },
  {
    id: 9,
    price: '₹2,25,000/- Onwards',
    img: europeCard,
    title: 'USA West Coast Explorer',
    duration: '10N/11D',
    route: 'San Francisco - Las Vegas',
    dates: '1 Dec',
  },
  {
    id: 10,
    price: '₹1,99,000/- Onwards',
    img: europeCard,
    title: 'Australia Highlights',
    duration: '9N/10D',
    route: 'Sydney - Melbourne',
    dates: '22 Dec',
  },
  {
    id: 11,
    price: '₹78,000/- Onwards',
    img: europeCard,
    title: 'Thailand Fun Getaway',
    duration: '4N/5D',
    route: 'Bangkok - Phuket',
    dates: '30 Aug',
  },
  {
    id: 12,
    price: '₹1,55,000/- Onwards',
    img: europeCard,
    title: 'South Africa Safari Adventure',
    duration: '8N/9D',
    route: 'Cape Town - Kruger',
    dates: '18 Nov',
  },
  {
    id: 13,
    price: '₹1,45,000/- Onwards',
    img: europeCard,
    title: 'Spain Cultural Discovery',
    duration: '7N/8D',
    route: 'Madrid - Barcelona',
    dates: '14 Oct',
  },
  {
    id: 14,
    price: '₹2,40,000/- Onwards',
    img: europeCard,
    title: 'Iceland Winter Expedition',
    duration: '6N/7D',
    route: 'Reykjavik - Akureyri',
    dates: '1 Jan',
  },
  {
    id: 15,
    price: '₹90,000/- Onwards',
    img: europeCard,
    title: 'Sri Lanka Coastal Trail',
    duration: '5N/6D',
    route: 'Colombo - Galle',
    dates: '9 Sep',
  },
  {
    id: 16,
    price: '₹1,60,000/- Onwards',
    img: europeCard,
    title: 'New Zealand Nature Loop',
    duration: '9N/10D',
    route: 'Auckland - Queenstown',
    dates: '15 Feb',
  },
  {
    id: 17,
    price: '₹85,000/- Onwards',
    img: europeCard,
    title: 'Dubai Luxury Getaway',
    duration: '4N/5D',
    route: 'Dubai - Abu Dhabi',
    dates: '28 Dec',
  },
  {
    id: 18,
    price: '₹1,70,000/- Onwards',
    img: europeCard,
    title: 'Canada Rockies Explorer',
    duration: '8N/9D',
    route: 'Vancouver - Calgary',
    dates: '10 Jan',
  },
];


const InternationalAllPackages = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [visibleTrips, setVisibleTrips] = useState([]);
  const rowCount = 2;

  // 🧮 Calculate number of columns based on CSS grid
  const getColumnCount = () => {
    const el = document.querySelector('.International-trip-packages');
    if (!el) return 3; // fallback
    const style = window.getComputedStyle(el);
    const columns = style.getPropertyValue('grid-template-columns').split(' ').length;
    return columns;
  };

  // 🔁 Load more trips based on visible count
  const showNextTrips = useCallback(() => {
    const cols = getColumnCount();
    const toShow = rowCount * cols;
    const nextSet = allTrips.slice(visibleCount, visibleCount + toShow);
    setVisibleTrips(prev => [...prev, ...nextSet]);
    setVisibleCount(prev => prev + nextSet.length);
  }, [visibleCount]);

  // 🔄 On page load: scroll to top, reset state, and load first batch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });

    setVisibleCount(0);
    setVisibleTrips([]);

    const timeout = setTimeout(() => {
      const cols = getColumnCount();
      const toShow = rowCount * cols;
      const nextSet = allTrips.slice(0, toShow);
      setVisibleTrips(nextSet);
      setVisibleCount(nextSet.length);
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="International-upcoming-trips-container">
      <div className="International-community-header">
        <h2>All Packages</h2>
      </div>

      <div className="International-trip-packages">
        {visibleTrips.map(trip => (
          <div
            key={trip.id}
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

      {visibleCount < allTrips.length && (
        <button className="exploreButton" onClick={showNextTrips}>
          Explore More
        </button>
      )}
    </div>
  );
};

export default InternationalAllPackages;
