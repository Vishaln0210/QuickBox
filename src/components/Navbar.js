// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import { CartContext } from '../context/CartContext'; // Import CartContext
import logo from '../assets/Box Delivery Service (1).png';

const Navbar = () => {
  const { cartItemCount } = useContext(CartContext); // Use CartContext

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="QuickBox" className="navbar-logo" />
        QuickBox
      </Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/cart" className="cart-link">
          Cart ({cartItemCount})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
