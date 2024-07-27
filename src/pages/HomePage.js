// src/pages/HomePage.js
import React from 'react';
import '../css/HomePage.css'; // Updated path to HomePage.css
import heroImage from '../assets/Ecommerce checkout laptop-bro.png'; // Adjust path if necessary

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-text">
        <h1>Welcome to QuickBox</h1>
        <p>Your fast and reliable e-commerce solution.</p>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Ecommerce checkout" />
      </div>
    </div>
  );
};

export default HomePage;
