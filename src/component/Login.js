import React, { useState } from 'react';

function Login() {
  const [isSignup, setIsSignup] = useState(false);

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1 id="title">{isSignup ? 'Sign Up' : 'Sign In'}</h1>
        <form>
          {isSignup && (
            <div className="input-group">
              <div className="input-field" id="nameField">
                <i className="fa-solid fa-user"></i>
                <input type="text" placeholder="Name" />
              </div>
            </div>
          )}
          <div className="input-group">
            <div className="input-field">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <p style={{ color: 'aliceblue' }}>
              Lost password{' '}
              <a href="https://mail.google.com/mail/u/0/#inbox">Click Here!</a>
            </p>
          </div>
          <div className="btn-field">
            <button
              type="button"
              id="signupBtn"
              onClick={toggleSignup}
              className={isSignup ? 'disable' : ''}
            >
              Sign Up
            </button>
            <button
              type="button"
              id="signinBtn"
              onClick={toggleSignup}
              className={isSignup ? '' : 'disable'}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
