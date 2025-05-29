

// // src/pages/LandingPage.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const LandingPage = () => {
//   const user = JSON.parse(localStorage.getItem('user'));
//   const navigate = useNavigate();

//   const handleExploreDashboard = () => {
//     navigate('/dashboard');
//   };

//   return (
//     <div
//       className="h-screen flex flex-col items-start justify-center px-16 relative"
//       style={{ backgroundColor: '#f3e9dc' }}
//     >
//       <h1 className="text-5xl font-bold text-gray-900 mb-4">
//         Welcome, {user?.username || 'User'}!
//       </h1>

//       <p className="text-xl text-gray-800 mb-6">
//         You have successfully logged in to BladeRunner.
//       </p>

//       <button
//         onClick={handleExploreDashboard}
//         className="bg-[#6f4e37] hover:bg-[#8b5e3c] text-white font-semibold py-2 px-6 rounded-lg transition"
//       >
//         Explore Dashboard
//       </button>
//     </div>
//   );
// };

// export default LandingPage;

// src/pages/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  // Parse the user object from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  const navigate = useNavigate();

  // Navigate to dashboard on button click
  const handleExploreDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div
      className="h-screen flex flex-col items-start justify-center px-16 relative"
      style={{ backgroundColor: '#f3e9dc' }}
    >
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        {/* Show "Welcome, [username]" or fallback "User" */}
        Welcome, {user?.username || 'User'}!
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
