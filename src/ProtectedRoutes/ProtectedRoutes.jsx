/* eslint-disable react/prop-types */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function ProtectedRoutes({ children }) {
  let token = localStorage.getItem('token');
  console.log(token);

  try {
    const decoded = jwtDecode(token);

    console.log(decoded);
    if (decoded.role !== 'user') {
      localStorage.clear();
      return <Navigate to="/signin" />;
    }
  } catch (error) {
    localStorage.clear();
    return <Navigate to="/signin" />;
  }

  if (token) return children;

  return <Navigate to="/signin" />;
}

export default ProtectedRoutes;
