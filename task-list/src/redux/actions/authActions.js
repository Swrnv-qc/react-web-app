// authActions.js
export const signupUser = (userData) => {
    return (dispatch) => {
      const user = { ...userData, id: Math.random().toString(36).substring(7) };
      localStorage.setItem('user', JSON.stringify(user));
  
      dispatch({ type: 'SIGNUP_USER', payload: user });
    };
  };
  
  export const loginUser = (userData) => {
    return (dispatch) => {
      const user = { ...userData, id: Math.random().toString(36).substring(7) };
      localStorage.setItem('user', JSON.stringify(user));
  
      dispatch({ type: 'LOGIN_USER', payload: user });
    };
  };
  