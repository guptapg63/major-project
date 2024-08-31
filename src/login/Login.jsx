import React, { useState } from 'react'
import "./login.css";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

const [values, setValues] = useState({email: "", password: "" });
const [errors, setErrors] = useState({});
const navigate = useNavigate();

const validate = (values)=>{
    let errors ={};
    if(!values.email){
        errors.email="Email is required";
    }
    if(!values.password){
        errors.password = "Password is required";
    }
    return errors;
};

const handleChange = (type)=>{
    const{name,value}=type.target;
    setValues({...values,
        [name]:value,
    });
};

const handleSubmit = (type)=>{
    type.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if(Object.keys(validationErrors).length===0){
        alert("Welcome to Dashboard")
        setTimeout(()=>{
        navigate("/candidate");
        },100);
    }
};




    return (
        <div className="addUser">
            <h3>Sign In</h3>
            <form className="user-form" onSubmit={handleSubmit}>
                <div className="input-group">

                    <label htmlFor="email">Email:</label>
                    <input type="email"
                        id="email"
                        autoComplete="off"
                        placeholder="Enter Your Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    
                    {errors.email && <p className='error-text'>{errors.email}</p>}

                    <label htmlFor="password">Password:</label>
                    <input type="password"
                        id="password"
                        autoComplete="off"
                        placeholder="Enter Your Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}

                    />

                    {errors.password && <p className='error-text' >{errors.password}</p>}

                   <button type="submit" class="btn btn-login btn-primary">Login</button>

                </div>
            </form>

            <div className="sign-in">
                <Link to = "/forgot" className = "forgot">Forgot Password</Link>
                <p>Don't have Account ?</p>
                <Link to="/" type="submit" class="btn btn-sign-up btn-success">Sign Up</Link>
            </div> 
            
        </div>
    )
}

export default Login 