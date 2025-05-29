


// // src/App.js
// import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
// import SignupPage from './pages/SignupPage';
// import DashboardPage from './pages/DashboardPage';
// import AdminPage from './pages/AdminPage';
// import AdminLoginPage from './pages/AdminLoginPage';
// import AdminSetupPage from './pages/AdminSetupPage';
// import LandingPage from './pages/LandingPage';
// import ForgotPasswordPage from './pages/ForgotPasswordPage';

// import PrivateRoute from './pages/PrivateRoute';
// import AdminRoute from './pages/AdminRoute';

// const router = createBrowserRouter([
//   // 🔓 Public Routes
//   { path: '/', element: <HomePage /> },
//   { path: '/login', element: <LoginPage /> },
//   { path: '/register', element: <SignupPage /> },
//   { path: '/admin-login', element: <AdminLoginPage /> },
//   { path: '/admin-setup', element: <AdminSetupPage /> },
 
//   // 🔐 Protected User Routes
//   {
//     path: '/',
//     element: <PrivateRoute />,
//     children: [
//       { path: 'dashboard', element: <DashboardPage /> },
//       { path: 'landing', element: <LandingPage /> },
//     ],
//   },

//   // 🔐 Protected Admin Route
//   {
//     path: '/',
//     element: <AdminRoute />,
//     children: [
//       { path: 'admin', element: <AdminPage /> },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

// src/App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import AdminPage from './pages/AdminPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminSetupPage from './pages/AdminSetupPage';
import LandingPage from './pages/LandingPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage'; 

// Route Protection
import PrivateRoute from './pages/PrivateRoute';
import AdminRoute from './pages/AdminRoute';

const router = createBrowserRouter([
  // 🔓 Public Routes
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <SignupPage /> },
  { path: '/admin-login', element: <AdminLoginPage /> },
  { path: '/admin-setup', element: <AdminSetupPage /> },
  { path: '/forgot-password', element: <ForgotPasswordPage /> }, 
  { path: '/reset-password/:token', element: <ResetPasswordPage /> },

  // 🔐 Protected User Routes
  {
    path: '/',
    element: <PrivateRoute />,
    children: [
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'landing', element: <LandingPage /> },
    ],
  },

  // 🔐 Protected Admin Route
  {
    path: '/',
    element: <AdminRoute />,
    children: [
      { path: 'admin', element: <AdminPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
