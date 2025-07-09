import React, { useState } from 'react';
import '../styles/InternationalTourInfo.css';

const InternationalTourInfo = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(prev => !prev);
  };

  return (
    <div className="about-international-tours-wrapper">
      <div className="text-container">
        <h2><span>Best International Tour Package in Town</span></h2>

        <p>
          Ditch the long searches and travel confusion, your perfect international tour package is right here offered by{' '}
          <a href="https://wanderon.in/" target="_blank" rel="noopener noreferrer">WanderOn</a>.
          More than 20+ iconic destinations and perfect international trip packages covered by a team of experts that provide no less than a wholesome experience.
        </p>

        <span
          className={`read-more-toggle ${showMore ? 'right-align' : ''}`}
          onClick={toggleReadMore}
        >
          {showMore ? 'Read Less' : 'Read More'}
        </span>

        {showMore && (
          <div className="extra-content show">
            <p>
              From thrilling adventures to hearty shopping sagas and from capturing scenic beauties to eating the best cuisines worldwide, we
              make sure you create memories that last for a lifetime. Choose our best international trips, <strong>customize as per your preferences</strong>
              and take off on your journey that holds magical elements.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InternationalTourInfo;
