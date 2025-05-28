import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');

  const API_BASE = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch(`${API_BASE}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await res.text();
        throw new Error(`Invalid server response: ${text}`);
      }

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      console.log('✅ Registered:', data);
      navigate('/login');
    } catch (err) {
      console.error('❌ Register error:', err);
      setError(err.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'linear-gradient(135deg, #f5f0e6, #8b5e3c)' }}
    >
      <div
        className="w-full max-w-md rounded-2xl p-8 shadow-lg"
        style={{
          backgroundColor: '#f3e9dc',
          border: '1px solid #a97458',
          boxShadow: '0 4px 12px rgba(139, 94, 60, 0.3)',
        }}
      >
        <h2 className="text-3xl font-bold text-center mb-6" style={{ color: '#5b3a29' }}>
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium" style={{ color: '#5b3a29' }}>
              Username
            </label>
            <input
              type="text"
              name="username"
              required
              value={form.username}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 rounded focus:outline-none"
              style={{
                border: '1px solid #a97458',
                backgroundColor: '#ffffff',
                color: '#5b3a29',
              }}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium" style={{ color: '#5b3a29' }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 rounded focus:outline-none"
              style={{
                border: '1px solid #a97458',
                backgroundColor: '#ffffff',
                color: '#5b3a29',
              }}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium" style={{ color: '#5b3a29' }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 rounded focus:outline-none"
              style={{
                border: '1px solid #a97458',
                backgroundColor: '#ffffff',
                color: '#5b3a29',
              }}
            />
          </div>

          {error && (
            <p className="text-sm text-center" style={{ color: '#a63e3e' }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-2 rounded transition"
            style={{
              backgroundColor: '#6f4e37',
              color: '#f5f0e6',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#8b5e3c')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#6f4e37')}
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center mt-4" style={{ color: '#5b3a29' }}>
          Already have an account?{' '}
          <button
            className="hover:underline"
            style={{
              color: '#a97458',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
            }}
            onClick={() => navigate('/login')}
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SignupPage = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ username: '', email: '', password: '' });
//   const [error, setError] = useState('');

//   const API_BASE = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';


//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const res = await fetch(`${API_BASE}/api/auth/register`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });

//       const contentType = res.headers.get('content-type');
//       if (!contentType || !contentType.includes('application/json')) {
//         const text = await res.text();
//         throw new Error(`Invalid server response: ${text}`);
//       }

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.error || 'Registration failed');
//       }

//       console.log('✅ Registered:', data);
//       navigate('/login');
//     } catch (err) {
//       console.error('❌ Register error:', err);
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4" style={{ background: 'linear-gradient(135deg, #f5f0e6, #8b5e3c)' }}>
//       <div className="w-full max-w-md rounded-2xl p-8 shadow-lg" style={{ backgroundColor: '#f3e9dc', border: '1px solid #a97458' }}>
//         <h2 className="text-3xl font-bold text-center mb-6" style={{ color: '#5b3a29' }}>Create an Account</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input type="text" name="username" value={form.username} onChange={handleChange} placeholder="Username" required className="w-full px-4 py-2 border rounded" />
//           <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="w-full px-4 py-2 border rounded" />
//           <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" required className="w-full px-4 py-2 border rounded" />
//           {error && <p className="text-sm text-red-600 text-center">{error}</p>}
//           <button type="submit" className="w-full py-2 bg-brown-700 text-white rounded hover:bg-brown-600">Register</button>
//         </form>
//         <p className="text-sm text-center mt-4">Already have an account? <button onClick={() => navigate('/login')} className="text-brown-600 underline">Login here</button></p>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;
