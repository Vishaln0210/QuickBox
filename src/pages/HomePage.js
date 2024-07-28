// src/pages/HomePage.js
import React from 'react';
import '../css/HomePage.css';
import { Link } from 'react-router-dom';
import heroImage from '../assets/Ecommerce checkout laptop-bro.png';
import Categories from '../components/Categories';

const HomePage = () => {
  return (
    <div>
      <div className="home-page">
        <div className="hero-text">
          <h1>Welcome to QuickBox</h1>
          <p>Your one-stop shop for all your needs</p>
          <Link to="/categories" className="btn shop-now-button">Shop Now</Link>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Ecommerce Checkout" />
        </div>
      </div>
      <div className="categories-section-container">
        <Categories />
      </div>
    </div>
  );
};

export default HomePage;
