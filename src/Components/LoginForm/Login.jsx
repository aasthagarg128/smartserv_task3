import React,{useState} from 'react';
import './Login.css';
import logo from "./smartservlogo.png" ;

const Login = () => {


    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) ) {
      alert('Invalid email format');
      return;
    }

    if (!validatePassword(password)) {
      alert('Invalid password format');
      return;
    }

  }
  

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className='wrapper'>
      <form action="">
        <img src={logo} alt="company log"/>
        <div className='input-box'>
          <input type="text" placeholder='Username' required   onChange={handleEmailChange}/>
        </div>

        <div className='input-box'>
          <input type="password" placeholder='Password' required   onChange={handlePasswordChange}/>
        </div>

        
          <button type="submit" onClick={handleSubmit}>Login</button>
        

        <div className='forget-pass'>
          <a href='#'>Forgot your Password?</a>
        </div>
      </form>
    </div>
  );
};

export default Login