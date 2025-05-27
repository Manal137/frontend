
import React, { useState } from 'react';

const AdminSetupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSetup = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/admin/setup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('✅ Admin credentials saved successfully. You can now delete this setup page.');
        setUsername('');
        setPassword('');
      } else {
        setMessage(`❌ ${data.error}`);
      }
    } catch (err) {
      setMessage('❌ Server error. Please try again.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background: 'linear-gradient(135deg, #f5f0e6, #8b5e3c)',
      }}
    >
      <div
        className="w-full max-w-md rounded-lg p-8"
        style={{
          backgroundColor: 'rgba(245, 240, 230, 0.9)', // light beige translucent
          boxShadow: '0 8px 20px rgba(139, 94, 60, 0.3)',
        }}
      >
        <h2
          className="text-2xl font-bold mb-6 text-center"
          style={{ color: '#5b3a29' }} // dark brown
        >
          Admin Setup
        </h2>
        <input
          type="text"
          placeholder="Admin Username"
          className="w-full mb-4 px-4 py-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            border: '1.5px solid #a97458',
            backgroundColor: '#fff',
            color: '#5b3a29',
          }}
        />
        <input
          type="password"
          placeholder="Admin Password"
          className="w-full mb-6 px-4 py-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            border: '1.5px solid #a97458',
            backgroundColor: '#fff',
            color: '#5b3a29',
          }}
        />
        <button
          onClick={handleSetup}
          className="w-full py-2 rounded transition"
          style={{
            backgroundColor: '#6f4e37',
            color: '#f5f0e6',
            fontWeight: '600',
            boxShadow: '0 2px 6px rgba(111, 78, 55, 0.5)',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#8b5e3c';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#6f4e37';
          }}
        >
          Save Admin Credentials
        </button>
        {message && (
          <p
            className="mt-4 text-center text-sm"
            style={{ color: message.startsWith('❌') ? '#b03020' : '#3c6e47' }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminSetupPage;
