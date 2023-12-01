// taskActions.js
export const addTask = (taskData) => {
    return (dispatch) => {
      const task = { ...taskData, id: Math.random().toString(36).substring(7) };
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
  
      dispatch({ type: 'ADD_TASK', payload: task });
    };
  };
  
  export const shareTask = (taskId, sharedUser) => {
    return (dispatch) => {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, sharedUser } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  
      dispatch({ type: 'SHARE_TASK', payload: { taskId, sharedUser } });
    };
  };
  