// taskActions.js
export const addTask = (taskData) => {
    // Perform task addition logic, save task data to local storage, and dispatch action
    return (dispatch) => {
      // Perform any necessary validation or API calls for adding a task
  
      // Simulate a successful task addition for demonstration purposes
      const task = { ...taskData, id: Math.random().toString(36).substring(7) };
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
  
      dispatch({ type: 'ADD_TASK', payload: task });
    };
  };
  
  export const shareTask = (taskId, sharedUser) => {
    // Perform task sharing logic, save task data to local storage, and dispatch action
    return (dispatch) => {
      // Perform any necessary validation or API calls for sharing a task
  
      // Simulate a successful task sharing for demonstration purposes
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, sharedUser } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  
      dispatch({ type: 'SHARE_TASK', payload: { taskId, sharedUser } });
    };
  };
  