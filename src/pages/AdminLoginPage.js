
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AdminLoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [pass, setPass] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const API_BASE = process.env.REACT_APP_API_BASE_URL;

//   const handleAdminLogin = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const res = await fetch(`${API_BASE}/admin/login`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password: pass }),
//       });

//       const data = await res.json();

//       if (res.ok && data.token && data.admin) {
//         localStorage.setItem('adminToken', data.token);
//         localStorage.setItem('admin', JSON.stringify(data.admin));
//         navigate('/admin');
//       } else {
//         setError(data.error || 'Login failed');
//       }
//     } catch (err) {
//       setError('Server error. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4"
//          style={{ background: 'linear-gradient(135deg, #f5f0e6, #8b5e3c)' }}>
//       <div className="w-full max-w-md rounded-2xl shadow-lg p-8"
//            style={{ backgroundColor: '#fffaf0' }}>
//         <h2 className="text-3xl font-bold text-center mb-6" style={{ color: '#5b3a29' }}>
//           Admin Login
//         </h2>
//         {error && (
//           <p className="text-center mb-4" style={{ color: '#b45309' }}>
//             {error}
//           </p>
//         )}
//         <form onSubmit={handleAdminLogin} className="space-y-4">
//           <div>
//             <label htmlFor="username" className="block text-sm font-medium mb-1" style={{ color: '#5b3a29' }}>
//               Username
//             </label>
//             <input type="text" id="username" required value={username}
//                    onChange={(e) => setUsername(e.target.value)}
//                    className="mt-1 block w-full px-4 py-2 rounded-md shadow-sm border"
//                    style={{
//                      borderColor: '#d6b370',
//                      backgroundColor: '#fffaf0',
//                      color: '#5b3a29',
//                    }} />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium mb-1" style={{ color: '#5b3a29' }}>
//               Password
//             </label>
//             <input type="password" id="password" required value={pass}
//                    onChange={(e) => setPass(e.target.value)}
//                    className="mt-1 block w-full px-4 py-2 rounded-md shadow-sm border"
//                    style={{
//                      borderColor: '#d6b370',
//                      backgroundColor: '#fffaf0',
//                      color: '#5b3a29',
//                    }} />
//           </div>
//           <button type="submit"
//                   className="w-full py-2 rounded transition"
//                   style={{
//                     backgroundColor: '#a97458',
//                     color: 'white',
//                     fontWeight: '600',
//                   }}
//                   onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#8b5e3c'}
//                   onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#a97458'}>
//             Login as Admin
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLoginPage;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: pass }), // ✅ using email
      });

      const data = await res.json();

      if (res.ok && data.token && data.admin) {
        localStorage.setItem('adminToken', data.token);
        localStorage.setItem('admin', JSON.stringify(data.admin));
        navigate('/admin');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Server error. Please try again.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'linear-gradient(135deg, #f5f0e6, #8b5e3c)' }}
    >
      <div
        className="w-full max-w-md rounded-2xl shadow-lg p-8"
        style={{ backgroundColor: '#fffaf0' }}
      >
        <h2
          className="text-3xl font-bold text-center mb-6"
          style={{ color: '#5b3a29' }}
        >
          Admin Login
        </h2>
        {error && (
          <p className="text-center mb-4" style={{ color: '#b45309' }}>
            {error}
          </p>
        )}
        <form onSubmit={handleAdminLogin} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1"
              style={{ color: '#5b3a29' }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 rounded-md shadow-sm border focus:outline-none focus:ring-2 focus:ring-[#a97458] focus:border-[#a97458]"
              style={{
                borderColor: '#d6b370',
                backgroundColor: '#fffaf0',
                color: '#5b3a29',
              }}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
              style={{ color: '#5b3a29' }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="mt-1 block w-full px-4 py-2 rounded-md shadow-sm border focus:outline-none focus:ring-2 focus:ring-[#a97458] focus:border-[#a97458]"
              style={{
                borderColor: '#d6b370',
                backgroundColor: '#fffaf0',
                color: '#5b3a29',
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded transition"
            style={{
              backgroundColor: '#a97458',
              color: 'white',
              fontWeight: '600',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = '#8b5e3c')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = '#a97458')
            }
          >
            Login as Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
