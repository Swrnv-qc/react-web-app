// authActions.js
export const signupUser = (userData) => {
    // Perform signup logic, save user data to local storage, and dispatch action
    return (dispatch) => {
      // Perform any necessary validation or API calls for signup
  
      // Simulate a successful signup for demonstration purposes
      const user = { ...userData, id: Math.random().toString(36).substring(7) };
      localStorage.setItem('user', JSON.stringify(user));
  
      dispatch({ type: 'SIGNUP_USER', payload: user });
    };
  };
  
  export const loginUser = (userData) => {
    // Perform login logic, save user data to local storage, and dispatch action
    return (dispatch) => {
      // Perform any necessary validation or API calls for login
  
      // Simulate a successful login for demonstration purposes
      const user = { ...userData, id: Math.random().toString(36).substring(7) };
      localStorage.setItem('user', JSON.stringify(user));
  
      dispatch({ type: 'LOGIN_USER', payload: user });
    };
  };
  