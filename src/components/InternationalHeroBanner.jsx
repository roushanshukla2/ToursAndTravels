import React from 'react';
import '../styles/InternationalHeroBanner.css';

const InternationalHeroBanner = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  return (
    <div className="international-banner-wrapper">
      <div className="banner-content">
        <div className="text-container">
          <h2>International Tour Package – Book Now At Best Prices</h2>
          <p className="bg-yellow">
            Discover The World Your Way – Find The Perfect International Tour Package Today!
          </p>
        </div>

        <div className="callback-form">
          <h3>
            Not sure what to do? We’ll give you a <div className="blue-text">Call back</div>
          </h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="blue-text font-light">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />

            <label htmlFor="email" className="blue-text font-light">Email</label>
            <input type="email" id="email" placeholder="Enter your email id" required />

            <label htmlFor="tel" className="blue-text font-light">Phone</label>
            <input type="tel" id="tel" placeholder="Enter your phone number" required />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="review-count-wrapper">
        <div className="review">
          <img src="/google.webp" alt="Google" />
          <div className="international-review-count">
            <span className="rating">★ 4.9</span>
            <span>(13150 reviews)</span>
          </div>
        </div>
        <div className="review">
          <img src="/tripadvisor.webp" alt="Tripadvisor" />
          <div className="international-review-count">
            <span className="rating">★ 5.0</span>
            <span>(3690 reviews)</span>
          </div>
        </div>
        <div className="review">
          <img src="/facebook.svg" alt="Facebook" />
          <div className="international-review-count">
            <span className="rating">★ 4.9</span>
            <span>(1031 reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalHeroBanner;
