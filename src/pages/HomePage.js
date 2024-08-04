import React from 'react';
import '../css/HomePage.css';
import { Link } from 'react-router-dom';
import heroImage from '../assets/Ecommerce checkout laptop-bro.png';
import offerImage from '../assets/offer.png'; // Add an image for offers section
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
      <div className="about-us-section">
        <h2>About Us</h2>
        <p>QuickBox is an innovative eCommerce platform where you can find everything you need in one place. We connect customers directly with sellers, offering a seamless shopping experience without intermediaries. Join us for an unparalleled shopping experience with exclusive benefits and subscription models for both sellers and customers.</p>
      </div>
      <div className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Fast Delivery</h3>
            <p>Get your products delivered quickly and efficiently.</p>
          </div>
          <div className="feature-item">
            <h3>24/7 Support</h3>
            <p>Our support team is available around the clock to assist you.</p>
          </div>
          <div className="feature-item">
            <h3>Secure Payment</h3>
            <p>We offer secure payment options for your peace of mind.</p>
          </div>
          <div className="feature-item">
            <h3>Wide Range of Products</h3>
            <p>Choose from a vast selection of products across various categories.</p>
          </div>
        </div>
      </div>
      <div className="offers-section">
        <h2>Exclusive Offers</h2>
        <div className="offer-image">
          <img src={offerImage} alt="Exclusive Offers" />
        </div>
        <p>Check out our latest offers and discounts on a wide range of products. Don’t miss out on the best deals available only on QuickBox.</p>
      </div>
      <div className="testimonials-section">
        <h2>Customer Testimonials</h2>
        <div className="testimonial">
          <p>"QuickBox is the best online shopping platform I've used. The delivery is fast and the products are of great quality!"</p>
          <p>- John Doe</p>
        </div>
        <div className="testimonial">
          <p>"Excellent customer service and a wide range of products. I highly recommend QuickBox!"</p>
          <p>- Jane Smith</p>
        </div>
      </div>
      <div className="contact-us-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, feel free to reach out to us at:</p>
        <p>Email: support@quickbox.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </div>
  );
};

export default HomePage;