import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop"; // ✅ Auto-scroll on route change
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import BodyContent from "./components/BodyContent";
import ReviewBadges from "./components/ReviewBadges";
import BannerSection from "./components/BannerSection";
import UpcomingTrips from "./components/UpcomingTrips";
import ContactForm from "./components/ContactForm";
import WanderOnBenefitsPage from "./components/WanderOnBenefitsPage";
import Footer from "./components/FooterSection";
import JourneyCarousel from "./components/JourneyCarousel";
import CorporateTours from "./components/Corporatetours";
import BlogGrid from "./components/BlogGrid";
import InternationalTourInfo from "./components/InternationalTourInfo";
import InternationalBanner from "./components/InternationalBanner";
import InternationalHeroBanner from "./components/InternationalHeroBanner"; 
import InternationalDestination from "./components/InternationalDestination";
import InternationalBestSellerPackages from "./components/InternationalBestSellerPackages";
import InternationalAllPackages from "./components/InternationalAllPackages";
import BestOfInternationalPlaces from "./components/BestOfInternationalPlaces"; // Importing the best of international places component
import InternationalTravellerReviews from "./components/InternationalTravellerReviews"; // Importing the traveller reviews component
import YouTubeCarousel from "./components/YouTubeCarousel"; // Importing the YouTube carousel component
import InternationalBlogSection from "./components/InternationalBlogSection"; // Importing the international blog section
import InternationalFAQ from "./components/InternationalFAQ"; // Importing the FAQ component
import InternationalGuidelines from "./components/InternationalGuidelines"; // Importing the guidelines component
import InternationalContactForm from "./components/InternationalContactForm"; // Importing the contact form component
// Dummy pages
const AboutUs = () => <h2>About Us Page</h2>;
const Payment = () => <h2>Payment Page</h2>;
const IndiaTrips = () => <h2>India Trips Page</h2>;
const WeekendTrips = () => <h2>Weekend Trips Page</h2>;
const GroupTours = () => <h2>Group Tours Page</h2>;
const Honeymoon = () => <h2>Honeymoon Packages Page</h2>;
const GiftCards = () => <h2>Gift Cards Page</h2>;

// 🏠 Home Layout
const Home = () => (
  <>
    <Navbar />
    <BodyContent isBlog={false} />
    <ReviewBadges />
    <BannerSection />
    <UpcomingTrips />
    <WanderOnBenefitsPage />
    <JourneyCarousel />
    <ContactForm />
    <Footer />
  </>
);

// 📝 Blog Layout
const Blog = () => (
  <>
    <Navbar />
    <BodyContent isBlog={true} />
    <BlogGrid />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ Scroll to top on every route change */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/corporate-tours" element={<CorporateTours />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/upcoming-trips" element={<UpcomingTrips />} />

        {/* 🌍 International Trip Page */}
        <Route
          path="/international-trips"
          element={
            <>
              <Navbar />
              <InternationalHeroBanner />
              <InternationalTourInfo />
              <InternationalDestination />
              <InternationalBestSellerPackages />
              <InternationalAllPackages />
              <InternationalBanner />
              <WanderOnBenefitsPage />
              <BestOfInternationalPlaces />
              <InternationalTravellerReviews />
              <YouTubeCarousel />
              <InternationalBlogSection />
              <InternationalFAQ />
              <InternationalGuidelines />
              <InternationalContactForm />
              <Footer />
            </>
          }
        />

        {/* 🇮🇳 Other Trip Routes */}
        <Route
          path="/india-trips"
          element={
            <>
              <Navbar />
              <IndiaTrips />
              <Footer />
            </>
          }
        />
        <Route
          path="/weekend-trips"
          element={
            <>
              <Navbar />
              <WeekendTrips />
              <Footer />
            </>
          }
        />
        <Route
          path="/group-tours"
          element={
            <>
              <Navbar />
              <GroupTours />
              <Footer />
            </>
          }
        />
        <Route
          path="/honeymoon"
          element={
            <>
              <Navbar />
              <Honeymoon />
              <Footer />
            </>
          }
        />
        <Route
          path="/gift-cards"
          element={
            <>
              <Navbar />
              <GiftCards />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
