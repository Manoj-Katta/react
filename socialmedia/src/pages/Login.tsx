import React from 'react'
import { auth, provider } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();

  const signInWithGoogle = async() => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate('/');
  }

  return (
    <div>
      <h1>login page</h1>
      <p>Sign In With Google</p>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  )
}

