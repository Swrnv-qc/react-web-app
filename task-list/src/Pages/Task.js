// Task.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, shareTask } from '../redux/actions/taskActions';

const Task = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const tasks = useSelector((state) => state.tasks.tasks);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleAddTask = () => {
    dispatch(addTask({ title, description, deadline, owner: user.username }));
  };

  const handleShareTask = (taskId, sharedUser) => {
    dispatch(shareTask(taskId, sharedUser));
  };

  return (
    <div>
      <h2>Task List</h2>
      <div>
        <h3>Add Task</h3>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Deadline:
          <input type="datetime-local" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        </label>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div>
        <h3>Task List</h3>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong>{task.title}</strong>
              <p>{task.description}</p>
              <p>Deadline: {task.deadline}</p>
              <p>Owner: {task.owner}</p>
              {task.owner === user.username && (
                <button onClick={() => handleShareTask(task.id, 'sharedUser')}>
                  Share with another user
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Task;
