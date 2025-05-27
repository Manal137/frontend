import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
  let admin = null;
  try {
    const adminStr = localStorage.getItem('admin');
    admin = adminStr && adminStr !== 'undefined' ? JSON.parse(adminStr) : null;
  } catch (err) {
    console.error('Failed to parse admin from localStorage:', err);
  }

  return admin ? <Outlet /> : <Navigate to="/admin-login" />;
};

export default AdminRoute;
