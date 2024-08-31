import React, { useState } from 'react';
import "./password.css";
import {  useNavigate } from 'react-router-dom';

const Password = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => { 
    event.preventDefault();

    if (!password || !confirmPassword) {
      setError("Both fields are required");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError('');
      alert("Password generated Successfully");
      setTimeout(()=>{
      navigate("/login");
      },100); 
    }
  };

  return (
    <div className="box">
      <h3>Create Password</h3>
      <form className="password-form" onSubmit={handleSubmit}>
        <div className="password-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            autoComplete="off"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            autoComplete="off"
            placeholder="Confirm Your Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {error && <p className='error-text'>{error}</p>}
        </div>
        <div className="password-btn-div">
        <button type="submit" className="btn password-button btn-success">
          Confirm Password
        </button>
        </div>
      </form>
    </div>
  );
}

export default Password;
