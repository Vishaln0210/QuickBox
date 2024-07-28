import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/CheckoutPage.css';
import { CartContext } from '../context/CartContext';

const CheckoutPage = () => {
  const { cartItems = [], clearCart } = useContext(CartContext);
  const [shippingAddress, setShippingAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [promoCode, setPromoCode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (!shippingAddress || !contactNumber) {
      setError('Please fill in all required fields.');
      return;
    }

    // Add additional validation logic if necessary

    // Proceed with order logic here
    console.log('Order placed:', { shippingAddress, contactNumber, paymentMethod, cartItems, promoCode });
    clearCart();
    navigate('/order-tracking');
  };

  const totalPrice = Array.isArray(cartItems) ? 
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0) : 
    0;

  const shippingCost = 50; // Example fixed shipping cost
  const taxRate = 0.18; // Example tax rate
  const taxAmount = totalPrice * taxRate;
  const discount = promoCode === 'SAVE10' ? 0.10 * totalPrice : 0; // Example discount
  const finalTotal = totalPrice + shippingCost + taxAmount - discount;

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="checkout-summary">
        <h3>Order Summary</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className="summary-item" key={item.id}>
                <span>{item.name} (x{item.quantity})</span>
                <span>{`Rs.${(item.price * item.quantity).toFixed(2)}`}</span>
              </div>
            ))}
            <div className="summary-costs">
              <div className="summary-item">
                <span>Shipping Cost:</span>
                <span>{`Rs.${shippingCost.toFixed(2)}`}</span>
              </div>
              <div className="summary-item">
                <span>Tax (18%):</span>
                <span>{`Rs.${taxAmount.toFixed(2)}`}</span>
              </div>
              {discount > 0 && (
                <div className="summary-item">
                  <span>Discount:</span>
                  <span>{`-Rs.${discount.toFixed(2)}`}</span>
                </div>
              )}
              <div className="summary-total">
                <span>Total:</span>
                <span>{`Rs.${finalTotal.toFixed(2)}`}</span>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="checkout-form">
        <h3>Shipping Information</h3>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="shippingAddress">Shipping Address:</label>
          <input
            type="text"
            id="shippingAddress"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            placeholder="Enter your shipping address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="text"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            placeholder="Enter your contact number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="promoCode">Promo Code:</label>
          <input
            type="text"
            id="promoCode"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter promo code (optional)"
          />
        </div>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">Stripe</option>
            <option value="bank-transfer">Bank Transfer</option>
            <option value="bank-transfer">Cash-on-Delivery</option>
            <option value="bank-transfer">Cash-on-physical</option>
            <option value="bank-transfer">UPI</option>
          </select>
        </div>
        <button onClick={handlePlaceOrder}>Place Order</button>
        <div className="customer-service">
          <p>Need help? <a href="/contact-us">Contact our support team</a></p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
