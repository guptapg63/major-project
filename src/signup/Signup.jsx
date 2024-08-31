import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = (values) => {
    let errors = {};
    if (!values.email) errors.email = "Email is required";
    if (!values.password) errors.password = "Password is required";
    if (values.password !== values.confirmPassword)
      errors.confirmPassword = "Passwords do not match";
    return errors;
  };

  const handleChange = (type) => {
    const { name, value } = type.target;
    setValues({
      ...values,
      [name]: value
    }); 
  };

  const handleSubmit = (type) => {
    type.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("You are registered now \n\n Welcome to Dashboard"); 
      setTimeout(()=>{
        navigate("/candidate");
      },100)
    }
  };

  return (
    <div className="addUser">
      <h3>Sign Up</h3>
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter Your Email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Enter Your Password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            autoComplete="off"
            placeholder="Confirm Your Password"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="error-text">{errors.confirmPassword}</p>
          )}

          <button type="submit" className="btn btn-success">
            Sign Up
          </button>
        </div>
      </form>

      <div className="login">
        <p>Already have an account?</p>
        <Link to="/login" className="btn btn-primary">Login</Link>
      </div>
    </div>
  );
};

export default Signup;
