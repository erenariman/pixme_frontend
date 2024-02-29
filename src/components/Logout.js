import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      await axios.post('/api/logout/');
      localStorage.removeItem('token-info')
      // e.g., removing the authentication token from local storage or cookies
      // ...

      // Redirect to the login page or any other route after successful logout
      navigate('/api/login/')
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
