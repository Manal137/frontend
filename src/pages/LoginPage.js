

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const API_BASE = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError(null); // clear previous errors

//     try {
//       const response = await fetch(`${API_BASE}/api/auth/login`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('user', JSON.stringify(data.user));
//         navigate('/landing');
//       } else {
//         setError(data.error || 'Login failed. Please try again.');
//       }
//     } catch (err) {
//       console.error('Login error:', err);
//       setError('Server error. Please try again later.');
//     }
//   };

//   return (
//     <div
//       className="flex items-center justify-center h-screen px-4"
//       style={{ background: 'linear-gradient(135deg, #f5f0e6, #8b5e3c)' }}
//     >
//       <div
//         className="w-full max-w-md rounded-xl shadow-lg p-8"
//         style={{
//           backgroundColor: '#f3e9dc',
//           border: '1px solid #a97458',
//           boxShadow: '0 4px 12px rgba(139, 94, 60, 0.3)',
//         }}
//       >
//         <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: '#5b3a29' }}>
//           User Login
//         </h2>

//         {error && (
//           <p className="text-center mb-4" style={{ color: '#a63e3e' }}>
//             {error}
//           </p>
//         )}

//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             autoComplete="email"
//             placeholder="Email"
//             className="w-full mb-4 px-4 py-2 rounded focus:outline-none"
//             style={{
//               border: '1px solid #a97458',
//               backgroundColor: '#ffffff',
//               color: '#5b3a29',
//             }}
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             autoComplete="current-password"
//             placeholder="Password"
//             className="w-full mb-6 px-4 py-2 rounded focus:outline-none"
//             style={{
//               border: '1px solid #a97458',
//               backgroundColor: '#ffffff',
//               color: '#5b3a29',
//             }}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button
//             type="submit"
//             className="w-full py-2 rounded transition"
//             style={{
//               backgroundColor: '#6f4e37',
//               color: '#f5f0e6',
//             }}
//             onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#8b5e3c')}
//             onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#6f4e37')}
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-sm text-center mt-4" style={{ color: '#5b3a29' }}>
//           Don't have an account?{' '}
//           <span
//             onClick={() => navigate('/register')}
//             style={{ color: '#a97458', cursor: 'pointer', textDecoration: 'underline' }}
//           >
//             Sign up
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const API_BASE = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); // clear previous errors

    try {
      const response = await fetch(`${API_BASE}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/landing');
      } else {
        setError(data.error || 'Login failed. Please try again.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen px-4"
      style={{ background: 'linear-gradient(135deg, #f5f0e6, #8b5e3c)' }}
    >
      <div
        className="w-full max-w-md rounded-xl shadow-lg p-8"
        style={{
          backgroundColor: '#f3e9dc',
          border: '1px solid #a97458',
          boxShadow: '0 4px 12px rgba(139, 94, 60, 0.3)',
        }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: '#5b3a29' }}>
          User Login
        </h2>

        {error && (
          <p className="text-center mb-4" style={{ color: '#a63e3e' }}>
            {error}
          </p>
        )}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            autoComplete="email"
            placeholder="Email"
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
          <input
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            className="w-full mb-6 px-4 py-2 rounded focus:outline-none"
            style={{
              border: '1px solid #a97458',
              backgroundColor: '#ffffff',
              color: '#5b3a29',
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4" style={{ color: '#5b3a29' }}>
          <span
            onClick={() => navigate('/forgot-password')}
            style={{
              color: '#a97458',
              cursor: 'pointer',
              textDecoration: 'underline',
              display: 'inline-block',
              marginBottom: '6px',
            }}
          >
            Forgot Password?
          </span>
        </p>

        <p className="text-sm text-center" style={{ color: '#5b3a29' }}>
          Don't have an account?{' '}
          <span
            onClick={() => navigate('/register')}
            style={{ color: '#a97458', cursor: 'pointer', textDecoration: 'underline' }}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
