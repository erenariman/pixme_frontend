import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/registration/', { username, email, password1, password2 });
      navigate('/')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={password1}
        onChange={(e) => setPassword1(e.target.value)}
        placeholder="Password"
      />
      <input
        type="password"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
        placeholder="Password again"
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
