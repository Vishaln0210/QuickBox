// src/pages/CartPage.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Import CartContext
import '../css/CartPage.css';

const CartPage = () => {
  const { cart, removeFromCart, updateCartItemQuantity } = useContext(CartContext); // Use CartContext

  const handleQuantityChange = (productId, quantity) => {
    updateCartItemQuantity(productId, parseInt(quantity));
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>Price: {item.price}</p>
                <div className="quantity-selector">
                  <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                  <input
                    type="number"
                    id={`quantity-${item.id}`}
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    min="1"
                  />
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="remove-button">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
