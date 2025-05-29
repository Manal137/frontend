// // src/pages/ResetPasswordPage.jsx
// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const ResetPasswordPage = () => {
//   const { token } = useParams();
//   const navigate = useNavigate();

//   const [password, setPassword] = useState('');
//   const [confirm, setConfirm] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

//   const API_BASE = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     setError('');

//     if (password !== confirm) {
//       setError("Passwords don't match");
//       return;
//     }

//     try {
//       const res = await fetch(`${API_BASE}/api/auth/reset-password/${token}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ password }),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         setMessage(data.message);
//         setTimeout(() => navigate('/login'), 3000);
//       } else {
//         setError(data.error || 'Reset failed');
//       }
//     } catch (err) {
//       console.error('Reset error:', err);
//       setError('Server error. Try again later.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-beige px-4">
//       <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-6 text-center text-brown">Reset Password</h2>

//         {message && <p className="text-green-600 text-center mb-4">{message}</p>}
//         {error && <p className="text-red-600 text-center mb-4">{error}</p>}

//         <form onSubmit={handleSubmit}>
//           <input
//             type="password"
//             placeholder="New password"
//             className="w-full mb-4 px-4 py-2 border rounded"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Confirm password"
//             className="w-full mb-6 px-4 py-2 border rounded"
//             value={confirm}
//             onChange={(e) => setConfirm(e.target.value)}
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-brown text-white py-2 rounded hover:bg-dark-brown transition"
//           >
//             Reset Password
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ResetPasswordPage;


// src/pages/ResetPasswordPage.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ResetPasswordPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const API_BASE = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (password !== confirm) {
      setError("Passwords don't match");
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/api/auth/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, newPassword: password }),
      });

      const contentType = res.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        const data = await res.json();

        if (res.ok) {
          setMessage(data.message);
          setTimeout(() => navigate('/login'), 3000);
        } else {
          setError(data.error || 'Reset failed');
        }
      } else {
        const text = await res.text();
        console.error('Expected JSON, got:', text);
        setError('Unexpected server response. Please try again later.');
      }
    } catch (err) {
      console.error('Reset error:', err);
      setError('Server error. Try again later.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-beige px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-brown">Reset Password</h2>

        {message && <p className="text-green-600 text-center mb-4">{message}</p>}
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="New password"
            className="w-full mb-4 px-4 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full mb-6 px-4 py-2 border rounded"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-brown text-white py-2 rounded hover:bg-dark-brown transition"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
