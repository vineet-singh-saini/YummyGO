import React, { useState } from 'react';
import './Login.css';

const Login = ({ setShowLogin }) => {
  const [logState, setLogState] = useState('sign-up');

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={() => setShowLogin(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h2 className="modal-title">
          {logState === 'sign-up' ? 'Create Your Account' : 'Login'}
        </h2>
        <form className="modal-form">
          {logState === 'sign-up' && (
            <>
              <input type="text" placeholder="Full Name" required />
              <input type="tel" placeholder="Mobile Number" required />
            </>
          )}
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">
            {logState === 'sign-up' ? 'Sign Up' : 'Login'}
          </button>
        </form>

        {logState === 'sign-up' && (
          <p className="switch-auth-text">
            Already have an account?{' '}
            <span onClick={() => setLogState('login')}>Login</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
