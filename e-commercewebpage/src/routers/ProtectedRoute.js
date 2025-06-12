import React from 'react';
import useAuth from '../custom-hooks/useAuth';
// import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router';
import { Outlet } from 'react-router';


const ProtectedRoute = () => {
    // const navigate = useNavigate();
    const {currentUser} = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/login"/>
}

export default ProtectedRoute