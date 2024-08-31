import React, { useState } from 'react';
import "./verify.css";
import { useNavigate } from 'react-router-dom';

const Verify = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value;
    const otpCopy = [...otp];
    otpCopy[index] = value.slice(0, 1); 
    setOtp(otpCopy);

  
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }

    
    if (!value && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const otpValue = otp.join('');
    
    if (!otpValue) {
      setError("OTP is required");
    } else {
      setError('');
      alert("OTP verified Successfully");
      setTimeout(() => {
        navigate("/password");
      }, 100);
    }
  };

  return (
    <div className="addUser">
      <h3>Verify OTP</h3>
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="otp-inputs">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              id={`otp-${index}`}
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              className="otp-box"
            />
          ))}
        </div>
        {error && <p className='error-text'>{error}</p>}
        <div className='verify-button-div'>
          <button type="submit" className="btn verify-button btn-primary">
            Verify OTP
          </button>
        </div>
      </form>
    </div>
  );
}

export default Verify;
