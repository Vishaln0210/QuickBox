// src/components/Register.js
import React, { useState } from 'react';
import '../css/AuthForm.css';
import registerImage from '../assets/Sign up-amico.png'; // Adjust path if needed

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    if (password === confirmPassword) {
      console.log('Registration Submitted', { email, password });
    } else {
      console.log('Passwords do not match');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Register</h2>
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
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
      <div className="image-container">
        <img src={registerImage} alt="Register" />
      </div>
    </div>
  );
};

export default Register;
