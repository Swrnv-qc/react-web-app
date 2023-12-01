// Signup.js
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { signupUser } from '../redux/actions/authActions';

const Signup = ({ signupUser }) => {
    const navigate = useNavigate();
//   const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');

  const handleSignup = () => {
    signupUser({ username, name }).then(() => {
      navigate('/task');
    });
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
