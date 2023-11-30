// Landing.js
import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <h1>Welcome to Your Task List App!</h1>
      <p>This is the landing page of your application.</p>
      <p>
        <Link to="/signup">Signup</Link> or <Link to="/login">Login</Link> to get started!
      </p>
    </div>
  );
};

export default Landing;