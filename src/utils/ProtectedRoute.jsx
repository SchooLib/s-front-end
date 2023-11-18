// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ path, element, role, children }) => {
  // Replace this with your authentication logic to get the user's role
  const user = useSelector((state) => state.auth.user);
  const userRole = user.role; // Example user role

  // Check if the user has the required role
  const isAuthorized = userRole === role;

  return (
    <Route
      path={path}
      element={isAuthorized ? (
        element
      ) : (
        <Navigate to="/login" replace state={{ from: path }} />
      )}
    >
      {children}
    </Route>
  );
};

export default ProtectedRoute;
