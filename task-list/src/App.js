// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Task from './Pages/Task';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
