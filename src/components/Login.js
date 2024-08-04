// src/components/Login.js
import React, { useState } from 'react';
import '../css/AuthForm.css';
import loginImage from '../assets/Login-bro.png'; // Adjust path if needed

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        // Perform any additional actions upon successful login
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
      setMessage('Login failed');
    }
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
          {message && <p>{message}</p>}
        </form>
      </div>
      <div className="image-container">
        <img src={loginImage} alt="Login" />
      </div>
    </div>
  );
};

export default Login;
