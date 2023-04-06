// taskReducer.js
const initialState = {
  tasks: []
};

const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task
});

export const removeTask = (taskId) => ({
  type: REMOVE_TASK,
  payload: taskId
});

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload)
      };
    default:
      return state;
  }
};

export default taskReducer;


// TaskInput.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from './reducers/taskReducer';

const TaskInput = ({ addTask }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTask({ id: Date.now(), text });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default connect(null, { addTask })(TaskInput);


// TaskList.js
import React from 'react';
import { connect } from 'react-redux';
import { removeTask } from './reducers/taskReducer';

const TaskList = ({ tasks, removeTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}{' '}
          <button type="button" onClick={() => removeTask(task.id)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

export default connect(mapStateToProps, { removeTask })(TaskList);


// App.js
import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const App = () => {
  return (
    <div


// TaskList.js
import React from 'react';
import { connect } from 'react-redux';
import { removeTask, completeTask } from './reducers/taskReducer';

const TaskList = ({ tasks, removeTask, completeTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        >
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => completeTask(task.id)}
            />
            {task.text}
          </label>
          <button type="button" onClick={() => removeTask(task.id)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

export default connect(mapStateToProps, { removeTask, completeTask })(TaskList);


// taskReducer.js
const initialState = {
  tasks: []
};

const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task
});

export const removeTask = (taskId) => ({
  type: REMOVE_TASK,
  payload: taskId
});

export const completeTask = (taskId) => ({
  type: COMPLETE_TASK,
  payload: taskId
});

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { ...action.payload, completed: false }]
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload)
      };
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        )
      };
    default:
      return state;
  }
};

export default taskReducer;
