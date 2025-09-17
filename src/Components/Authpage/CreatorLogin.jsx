import React from 'react';
import CenteredContainer from './Centercontainer'; // adjust path as needed
import logo from '../../assets/googleicon.png';

const CreatorLogin = () => {
  return (
    <CenteredContainer
      title="Creator Login"
      subtitle="Sign in to manage your creator profile and content"
      footer="For supporters: No account needed! Just connect your wallet to tip creators."
    >
      <form>
        <label className="input-label" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="creator@example.com"
          className="input-field"
        />

        <label className="input-label" htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="••••••••"
          className="input-field"
        />

        <button type="submit" className="signin-button">Sign In</button>
        
        <button type="submit" className="signin-button2">
            <img src={logo} alt="logo" className='icon'/> Sign In with Google</button>
         
      </form>

      <div className="login-links">
        <p><a href="/forgot-password">Forgot your password?</a></p>
        <p className='Ac'>Don't have an account? <a href="/signup">Sign up</a></p>
      </div>
    </CenteredContainer>
  );
};

export default CreatorLogin;
