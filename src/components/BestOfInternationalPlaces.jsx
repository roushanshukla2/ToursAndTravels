import React from "react";
import europeCard from "../assets/europe_card.webp"; // Adjust path as needed
import "../styles/BestOfInternationalPlaces.css";   // Paste your CSS here

const destinations = [
  {
    title: "Best of Europe",
    id: "europe",
    trips: [
      {
        price: "₹1,69,990/-",
        img: europeCard,
        title: "Classic European Discovery",
        duration: "10N/11D",
        route: "Paris - Rome - Amsterdam",
        dates: "5 Dec, 15 Dec",
      },
      {
        price: "₹1,69,990/-",
        img: europeCard,
        title: "Classic European Discovery",
        duration: "10N/11D",
        route: "Paris - Rome - Amsterdam",
        dates: "5 Dec, 15 Dec",
      },
      {
        price: "₹1,69,990/-",
        img: europeCard,
        title: "Classic European Discovery",
        duration: "10N/11D",
        route: "Paris - Rome - Amsterdam",
        dates: "5 Dec, 15 Dec",
      },
      {
        price: "₹1,45,000/-",
        img: europeCard,
        title: "Romantic Alps Escape",
        duration: "8N/9D",
        route: "Zurich - Interlaken",
        dates: "12 Jan",
      },
    ],
  },
  {
    title: "Best of Bali",
    id: "bali",
    trips: [
      {
        price: "₹89,000/-",
        img: europeCard,
        title: "Bali Beach Bliss",
        duration: "6N/7D",
        route: "Seminyak - Ubud - Nusa Penida",
        dates: "10 Oct, 18 Oct",
      },
      {
        price: "₹89,000/-",
        img: europeCard,
        title: "Bali Beach Bliss",
        duration: "6N/7D",
        route: "Seminyak - Ubud - Nusa Penida",
        dates: "10 Oct, 18 Oct",
      },
      {
        price: "₹89,000/-",
        img: europeCard,
        title: "Bali Beach Bliss",
        duration: "6N/7D",
        route: "Seminyak - Ubud - Nusa Penida",
        dates: "10 Oct, 18 Oct",
      },
      {
        price: "₹95,000/-",
        img: europeCard,
        title: "Cultural Retreat",
        duration: "5N/6D",
        route: "Ubud - Tanah Lot",
        dates: "5 Nov",
      }
    ],
  },
  {
    title: "Best of Dubai",
    id: "dubai",
    trips: [
      {
        price: "₹85,000/-",
        img: europeCard,
        title: "Desert Luxury & Skyscrapers",
        duration: "4N/5D",
        route: "Dubai - Abu Dhabi",
        dates: "8 Sep, 22 Sep",
      },{
        price: "₹85,000/-",
        img: europeCard,
        title: "Desert Luxury & Skyscrapers",
        duration: "4N/5D",
        route: "Dubai - Abu Dhabi",
        dates: "8 Sep, 22 Sep",
      },{
        price: "₹85,000/-",
        img: europeCard,
        title: "Desert Luxury & Skyscrapers",
        duration: "4N/5D",
        route: "Dubai - Abu Dhabi",
        dates: "8 Sep, 22 Sep",
      },
      {
        price: "₹90,000/-",
        img: europeCard,
        title: "Gold Souks & Marina",
        duration: "5N/6D",
        route: "Dubai City",
        dates: "12 Oct",
      },
    ],
  },
];

const BestOfInternationalPlaces = () => {
  const scrollCarousel = (id, direction) => {
    const wrapper = document.getElementById(`wrapper-${id}`);
    const scrollAmount = 320;
    if (wrapper) {
      wrapper.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div>
      {destinations.map((dest) => (
        <div key={dest.id} className="International-Best-Of-section-container">
          <h2>{dest.title}</h2>
          <div className="International-Best-Of-carousel-layout">
            <button
              className="International-Best-Of-arrow"
              onClick={() => scrollCarousel(dest.id, -1)}
            >
              &#8249;
            </button>
            <div
              className="International-Best-Of-carousel-wrapper"
              id={`wrapper-${dest.id}`}
            >
              <div
                className="International-Best-Of-card-row"
                id={`row-${dest.id}`}
              >
                {dest.trips.map((trip, index) => (
                  <div
                    key={index}
                    className="International-Best-Of-trip-card"
                    data-price={trip.price}
                  >
                    <img src={trip.img} alt={trip.title} />
                    <div className="International-Best-Of-trip-details">
                      <h3>{trip.title}</h3>
                      <p>{trip.duration}</p>
                      <p>{trip.route}</p>
                      <p>{trip.dates}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="International-Best-Of-arrow"
              onClick={() => scrollCarousel(dest.id, 1)}
            >
              &#8250;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestOfInternationalPlaces  ;
