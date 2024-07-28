// src/pages/ProductDetailsPage.js
import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import '../css/ProductDetailsPage.css';
import { CartContext } from '../context/CartContext'; // Import CartContext
import tomatoImage from '../assets/tomato.jpg';
import strawImage from '../assets/Straw.jpg';
import chilliPowderImage from '../assets/chillipowder.jpg';
import nutellaImage from '../assets/nutella.jpg';

// Sample product data
const productsData = [
  { id: 1, name: 'Tomato', price: 'Rs.0.70', image: tomatoImage, description: 'Fresh tomatoes', rating: 4.5, reviews: 120 },
  { id: 2, name: 'Straw', price: 'Rs.1.20', image: strawImage, description: 'Fresh straw', rating: 4.0, reviews: 80 },
  { id: 3, name: 'Chilli Powder', price: 'Rs.0.50', image: chilliPowderImage, description: 'Spicy chilli powder', rating: 4.8, reviews: 200 },
  { id: 4, name: 'Nutella', price: 'Rs.3.00', image: nutellaImage, description: 'Delicious Nutella', rating: 4.9, reviews: 150 },
];

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext); // Use CartContext
  const product = productsData.find(p => p.id === parseInt(productId));

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="product-details-section">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="product-price">{product.price}</p>
        <p className="product-rating">Rating: {product.rating} / 5 ({product.reviews} reviews)</p>
        <div className="quantity-selector">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
          />
        </div>
        <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
        <div className="related-products">
          <h3>Related Products</h3>
          <div className="related-products-list">
            {productsData.filter(p => p.id !== product.id).map((relatedProduct) => (
              <div className="related-product-card" key={relatedProduct.id}>
                <img src={relatedProduct.image} alt={relatedProduct.name} />
                <p>{relatedProduct.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
