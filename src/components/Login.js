import "../pages/SharedLayout.js";
import "../styles/login.css";
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/login/', { username, password });
      const userData = {
        username,
        password,
      };
      localStorage.setItem('token-info', JSON.stringify(userData));
      navigate('/')
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <div className={"login"}>
      <form onSubmit={handleSubmit} className={"login-form"}>
        <div>
          <label>Usernamee</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            autoFocus
          />
        </div>
        <br/>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <br/>
        <div align={"center"}>
          <button type="submit" className={"login"}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
