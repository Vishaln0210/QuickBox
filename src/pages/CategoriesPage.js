// src/pages/CategoriesPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Categories.css';
import groceriesImage from '../assets/groceries.jpg';
import clothingImage from '../assets/clothing.jpg';
import homeKitchenImage from '../assets/home-kitchen.jpg';
import booksImage from '../assets/Books.jpg';

const categories = [
  { name: 'Groceries', image: groceriesImage, path: '/categories/groceries' },
  { name: 'Clothing', image: clothingImage, path: '/categories/clothing' },
  { name: 'Home & Kitchen', image: homeKitchenImage, path: '/categories/home-kitchen' },
  { name: 'Books', image: booksImage, path: '/categories/books' },
];

const CategoriesPage = () => {
  return (
    <div className="categories-section">
      {categories.map((category) => (
        <div className="category-card" key={category.name}>
          <img src={category.image} alt={category.name} />
          <h3>{category.name}</h3>
          <p>Explore a wide range of {category.name.toLowerCase()}.</p>
          <Link to={category.path} className="shop-now-button">Shop Now</Link>
        </div>
      ))}
    </div>
  );
};

export default CategoriesPage;
