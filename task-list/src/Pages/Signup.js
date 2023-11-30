// Signup.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../redux/actions/authActions';

const Signup = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');

  const handleSignup = () => {
    dispatch(signupUser({ username, name }));
    // Add redirection logic or any other action after signup
  };

  return (
    <div>
      <h2>Signup</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
