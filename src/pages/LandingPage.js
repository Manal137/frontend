

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const LandingPage = () => {
//   const user = JSON.parse(localStorage.getItem('user'));
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <div
//       className="h-screen flex flex-col items-start justify-center px-16 relative"
//       style={{ backgroundColor: '#f3e9dc' }}
//     >
//       <button
//         onClick={handleLogout}
//         className="absolute top-6 right-6 bg-[#6f4e37] hover:bg-[#8b5e3c] text-white font-semibold py-1 px-4 rounded-md transition"
//       >
//         Logout
//       </button>

//       <h1 className="text-5xl font-bold text-gray-900 mb-4">
//         Welcome, {user?.name || 'User'}!
//       </h1>

//       <p className="text-xl text-gray-800 mb-6">
//         You have successfully logged in to BladeRunner.
//       </p>

//       <button
//         onClick={() => window.location.href = process.env.REACT_APP_DASHBOARD_URL}
//         className="bg-[#6f4e37] hover:bg-[#8b5e3c] text-white font-semibold py-2 px-6 rounded-lg transition"
//       >
//         Explore Dashboard
//       </button>
//     </div>
//   );
// };

// export default LandingPage;


import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleExploreDashboard = () => {
    navigate('/dashboard'); // ✅ Use client-side routing
  };

  return (
    <div
      className="h-screen flex flex-col items-start justify-center px-16 relative"
      style={{ backgroundColor: '#f3e9dc' }}
    >
      <button
        onClick={handleLogout}
        className="absolute top-6 right-6 bg-[#6f4e37] hover:bg-[#8b5e3c] text-white font-semibold py-1 px-4 rounded-md transition"
      >
        Logout
      </button>

      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Welcome, {user?.name || 'User'}!
      </h1>

      <p className="text-xl text-gray-800 mb-6">
        You have successfully logged in to BladeRunner.
      </p>

      <button
        onClick={handleExploreDashboard}
        className="bg-[#6f4e37] hover:bg-[#8b5e3c] text-white font-semibold py-2 px-6 rounded-lg transition"
      >
        Explore Dashboard
      </button>
    </div>
  );
};

export default LandingPage;
