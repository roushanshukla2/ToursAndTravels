import React, { useRef, useEffect, useState } from "react";
import "../styles/YouTubeCarousel.css";
import logo from "../assets/wanderon-logo.png";

const videoList = [
  "XXO0mdcyD6w",
  "BagUzmZTJ58",
  "dQw4w9WgXcQ",
];

const YouTubeCarousel = () => {
  const carouselRef = useRef(null);
  const [titles, setTitles] = useState(Array(videoList.length).fill("Loading..."));
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    videoList.forEach((videoId, index) => {
      const apiUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          setTitles((prev) => {
            const updated = [...prev];
            updated[index] = data.title;
            return updated;
          });
        })
        .catch(() => {
          setTitles((prev) => {
            const updated = [...prev];
            updated[index] = "Unable to fetch title";
            return updated;
          });
        });
    });
  }, []);

  const scrollCarousel = (direction) => {
    const scrollAmount = carouselRef.current.offsetWidth;
    carouselRef.current.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  };

  const updateDot = () => {
    const scrollLeft = carouselRef.current.scrollLeft;
    const index = Math.round(scrollLeft / carouselRef.current.offsetWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    const el = carouselRef.current;
    el.addEventListener("scroll", () => {
      clearTimeout(el._scrollTimeout);
      el._scrollTimeout = setTimeout(updateDot, 100);
    });
    return () => {
      el.removeEventListener("scroll", updateDot);
    };
  }, []);

  return (
    <div className="YouTubeCarouselWrapper">
      <div className="carousel-wrapper">
        <button className="nav-arrow left" onClick={() => scrollCarousel(-1)}>❮</button>

        <div className="carousel-container" ref={carouselRef}>
          {videoList.map((id, index) => (
            <div className="video-card" key={id}>
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                allowFullScreen
                title={`YouTube ${index}`}
              ></iframe>
              <div className="video-title">
                <img src={logo} alt="logo" />
                <span>{titles[index]}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-arrow right" onClick={() => scrollCarousel(1)}>❯</button>
        <div className="dots">
          {videoList.map((_, index) => (
            <div key={index} className={`dot ${index === activeIndex ? "active" : ""}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouTubeCarousel;
