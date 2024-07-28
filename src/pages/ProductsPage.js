// src/pages/ProductsPage.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../css/ProductPage.css';
import tomatoImage from '../assets/tomato.jpg';
import strawImage from '../assets/Straw.jpg';
import chilliPowderImage from '../assets/chillipowder.jpg';
import nutellaImage from '../assets/nutella.jpg';
import blackTeeImage from '../assets/blacktee.jpg';
import yellowImage from '../assets/yellow.jpg';
import denimJeanImage from '../assets/denimjean.jpg';
import woollenTeeImage from '../assets/wollentee.jpg';

const productsData = {
  groceries: [
    { id: 1, name: 'Tomato', price: 'Rs.0.70', image: tomatoImage },
    { id: 2, name: 'Straw', price: 'Rs.1.20', image: strawImage },
    { id: 3, name: 'Chilli Powder', price: 'Rs.0.50', image: chilliPowderImage },
    { id: 4, name: 'Nutella', price: 'Rs.3.00', image: nutellaImage },
  ],
  clothing: [
    { id: 1, name: 'Black Tee', price: 'Rs.200.00', image: blackTeeImage },
    { id: 2, name: 'Yellow Dress', price: 'Rs.500.00', image: yellowImage },
    { id: 3, name: 'Denim Jeans', price: 'Rs.800.00', image: denimJeanImage },
    { id: 4, name: 'Woollen Tee', price: 'Rs.700.00', image: woollenTeeImage },
  ],
  // Add data for other categories if needed
};

const ProductsPage = () => {
  const { category } = useParams();
  const products = productsData[category] || [];

  return (
    <div className="products-section">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </Link>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
