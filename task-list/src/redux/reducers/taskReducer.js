// taskReducer.js
const initialState = {
    tasks: [],
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return { ...state, tasks: [...state.tasks, action.payload] };
      case 'SHARE_TASK':
        const updatedTasks = state.tasks.map((task) =>
          task.id === action.payload.taskId ? { ...task, sharedUser: action.payload.sharedUser } : task
        );
        return { ...state, tasks: updatedTasks };
      default:
        return state;
    }
  };
  
  export default taskReducer;  