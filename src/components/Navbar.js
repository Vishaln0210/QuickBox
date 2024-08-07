// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import { CartContext } from '../context/CartContext';
import logo from '../assets/Box Delivery Service (1).png';
import { IoHomeSharp } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { SiSimplelogin } from "react-icons/si";

const Navbar = () => {
  const { cart } = useContext(CartContext); // Use CartContext to get the cart
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0); // Calculate total items

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="QuickBox" className="navbar-logo" />
        QuickBox
      </Link>
      <div className="navbar-links">
        <div className='home-icon'>
        <IoHomeSharp />
        </div>
        <Link to="/">Home</Link>
        <div className='category-icon'>
       <BiSolidCategory/>
        </div>
        <Link to="/categories">Categories</Link>
        <div className='Login-icon'>
        <RiLoginCircleFill />
        </div>
        <Link to="/login">Login</Link>
        <div className='register-icon'>
        <SiSimplelogin />
        </div>
        <Link to="/register">Register</Link>
        <div className='category-icon'>
       <FaShoppingCart/>
        </div>
        <Link to="/cart" className="cart-link">
          Cart <span className="cart-counter">{cartItemCount}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
