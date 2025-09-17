import React from 'react';
import CenteredContainer from './Centercontainer'; // adjust path as needed
import logo from '../../assets/googleicon.png';
import "./CreatorLogin.css"

import { ServerURL } from "../../config";

import { auth } from "../../firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const CreatorLogin = () => {
  async function SignInWithGoogle() {
    const provider = new GoogleAuthProvider();

    console.log(auth.currentUser)

    const res = await signInWithPopup(auth, provider);
    const token = await res.user.getIdToken();

    fetch(`${ServerURL}/api/auth/google`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token })
    })
      .then(res => {
        console.log(auth.currentUser)
      })
      .catch(e => {
        console.log(e.message)
    })

  }

  return (
    <CenteredContainer
      title="Creator Login"
      subtitle="Sign in to manage your creator profile and content"
      footer="For supporters: Just connect your wallet to tip creators"
    >
      <div>
        <div className="login-buttons">
          <button type="button" className="signin-button2" onClick={SignInWithGoogle}>
            <img src={logo} alt="logo" className='icon'/>
            <p>
              Sign In with Google
            </p>
          </button>
        </div>
      </div>
    </CenteredContainer>
  );
};

export default CreatorLogin;
