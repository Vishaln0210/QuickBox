import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/ProductDetailsPage.css';
import { CartContext } from '../context/CartContext';
import axios from 'axios';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate(); // Hook for navigation
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Fetch product details from the backend
    axios.get(`http://localhost:8080/api/products/${productId}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value)); // Ensure the quantity is a number
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: Number(quantity) });
  };

  const handleBuyNow = () => {
    addToCart({ ...product, quantity: Number(quantity) });
    navigate('/checkout'); // Redirect to checkout page
  };

  return (
    <div className="product-details-section">
      <div className="product-image">
        <img src={product.image} alt={product.product_name} />
      </div>
      <div className="product-info">
        <h2>{product.product_name}</h2>
        <p>{product.description}</p>
        <p className="product-price">Rs.{product.price}</p>
        <p className="product-rating">Rating: {product.rating} / 5</p>
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
        <button className="buy-now-button" onClick={handleBuyNow}>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
