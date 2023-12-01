// Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/authActions';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    dispatch(loginUser({ username }));
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
