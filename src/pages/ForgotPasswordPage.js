// src/pages/ForgotPasswordPage.js

import React, { useState } from 'react';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const API_BASE = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await fetch(`${API_BASE}/api/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Password reset instructions sent to your email.');
      } else {
        setError(data.error || 'Failed to send reset email.');
      }
    } catch (err) {
      console.error('Error sending password reset:', err);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen px-4" style={{ background: 'linear-gradient(135deg, #f5f0e6, #8b5e3c)' }}>
      <div className="w-full max-w-md rounded-xl shadow-lg p-8" style={{ backgroundColor: '#f3e9dc', border: '1px solid #a97458' }}>
        <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: '#5b3a29' }}>Forgot Password</h2>

        {message && <p className="text-green-600 text-center mb-4">{message}</p>}
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your registered email"
            className="w-full mb-4 px-4 py-2 rounded focus:outline-none"
            style={{
              border: '1px solid #a97458',
              backgroundColor: '#ffffff',
              color: '#5b3a29',
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-2 rounded transition"
            style={{
              backgroundColor: '#6f4e37',
              color: '#f5f0e6',
            }}
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
