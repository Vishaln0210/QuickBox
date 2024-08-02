// src/components/Login.js
import React, { useState } from 'react';
import '../css/AuthForm.css';
import loginImage from '../assets/Login-bro.png'; // Adjust path if needed

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login Submitted', { email, password });
    // For demonstration purposes
    setMessage('Login successful');
    setMessageType('success');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          {message && (
            <p className={messageType === 'success' ? 'success-message' : 'error-message'}>
              {message}
            </p>
          )}
        </form>
      </div>
      <div className="image-container">
        <img src={loginImage} alt="Login" />
      </div>
    </div>
  );
};

export default Login;
