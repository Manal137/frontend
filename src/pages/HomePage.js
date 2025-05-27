



import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen flex items-center justify-center px-4"
      style={{
        background: 'linear-gradient(135deg, #f5f0e6, #8b5e3c)',
      }}
    >
      <div
        className="p-10 rounded-3xl shadow-2xl max-w-3xl w-full text-center"
        style={{
          backgroundColor: '#f3e9dc', // light beige
          border: '1px solid #a97458', // brown border
          boxShadow: '0 4px 12px rgba(139, 94, 60, 0.3)',
          color: '#5b3a29',
        }}
      >
        <h1 className="text-5xl font-extrabold mb-4" style={{ color: '#5b3a29' }}>
          Welcome to <span style={{ color: '#5b3a29' }}>BladeRunner</span>
        </h1>
        <hr className="border-t-2 w-1/2 mx-auto my-4" style={{ borderColor: '#a97458' }} />
        <p className="text-lg mb-8" style={{ color: '#5b3a29' }}>
          {/* Add any description here if needed */}
        </p>

        {/* Main buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            onClick={() => navigate('/login')}
            className="font-semibold px-6 py-3 rounded-xl shadow transition flex items-center justify-center gap-2"
            style={{
              backgroundColor: '#6f4e37', // brown
              color: '#f5f0e6', // beige text
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#8b5e3c')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#6f4e37')}
          >
            Launch Platform
          </button>
          <button
            onClick={() => navigate('/register')}
            className="font-semibold px-6 py-3 rounded-xl shadow transition"
            style={{
              backgroundColor: '#f3e9dc', // beige
              color: '#5b3a29', // brown text
              border: '1px solid #a97458',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#a97458';
              e.currentTarget.style.color = '#f5f0e6';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#f3e9dc';
              e.currentTarget.style.color = '#5b3a29';
            }}
          >
            Create Account
          </button>
        </div>

        {/* Admin button */}
        <div className="mt-4">
          <button
            onClick={() => navigate('/admin-login')}
            className="font-semibold px-6 py-3 rounded-xl shadow transition"
            style={{
              backgroundColor: '#5b3a29', // darker brown
              color: '#f5f0e6',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#8b5e3c')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#5b3a29')}
          >
            Admin Portal
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
