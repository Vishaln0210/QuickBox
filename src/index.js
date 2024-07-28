import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './context/CartContext'; // Named import

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById('root')
);
