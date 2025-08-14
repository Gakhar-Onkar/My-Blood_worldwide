import React, { useState } from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';

import { FaAnglesRight } from "react-icons/fa6";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    phoneNumber: ''
  });

  const handleInputChange = (e) => {


    const name = e.target.name;
    const value = e.target.value;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/user', {
      state: {
        username: formData.username,
        phoneNumber: formData.phoneNumber
      }
    });
  };


  return (<>
    <div className="loginpage">

      <div className="background"></div>

      <div className="login-container">
        <div className="illustration">
          <img src="https://imgs.search.brave.com/PLI7dMnn3okwdx3cnjGMk6eDKq_1sTSZG33kqGJAZ2o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL3ByZW1p/dW0vcG5nLTI1Ni10/aHVtYi9ibG9vZC1i/YW5rLTE1OTM4MTIt/MTM0ODc3MS5wbmc_/Zj13ZWJwJnc9MTI4" alt="Login SVG" />
        </div>
        <form className="login-box" onSubmit={handleSubmit}>
          <h2>Welcome Back</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>

  </>
  )
}

export default Login
