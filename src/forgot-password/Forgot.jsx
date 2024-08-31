import React, { useState } from 'react';
import "./forgot.css";
import { useNavigate } from 'react-router-dom';

const Forgot = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); 

    if (!email) {
      setError("Email is required");
    } else {
      setError('');
      alert("OTP sent to your registered email");
      setTimeout(()=>{
      navigate("/verify");
      },100)
    }
  };

  return (
    <div className="addUser">
      <h3>Forgot Password</h3>
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <p className='error-text'>{error}</p>}
        </div>
        <div className='otp-button-div'>
          <button type="submit" className="btn otp-button btn-primary">
            Get OTP
          </button>
        </div>
      </form> 
    </div>
  );
}

export default Forgot;
