import React, {useState} from 'react';
import TaskForm from './components/TaskForm';
import TaskTodos from './components/TaskTodos';
import { useDispatch, useSelector } from 'react-redux'
import { deleteCompleted } from './redux/todoList/actions'

function App() {
  const dispatch = useDispatch();
  // for the counter button
  const todos = useSelector((state) => state.operations)
  const completeTodo = todos.filter((todo) => todo.completed === true)
  const percentageCompleted = Math.round((completeTodo.length / todos.length) * 50)
  const whiteColor = {
    backgroundColor: 'white',
    width: '50%',
    position: 'relative'
    
  }
  const orangeColor = {
    backgroundColor: 'yellow',
    width: `${percentageCompleted}%`,
    textAlign: 'center',
    position: 'absolute',
    top: '0',
    left: '0',
    // zIndex: '999',
  }
  
  const [editFormVisibility, setEditFormVisibility] = useState(false);

  // to edit the todo
  const [editTodo, setEditTodo] = useState('');

  const handleEditClick = (todo) => {
    setEditFormVisibility(true)
    setEditTodo(todo)
  }

  const cancelUpdate = () => {
    setEditFormVisibility(false)
  }
  return (
    <div className="App">
     
      <h1>TODOLIST</h1>
      <TaskForm editFormVisibility={editFormVisibility} editTodo={editTodo} cancelUpdate={cancelUpdate} />
      <TaskTodos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility} />
      <div>
        

      
        {todos.length > 0 && (
          <div className='btnsDiv'>
            <div className='btnCompare' style={whiteColor}></div>
            <div className="btnCompare" style={orangeColor}></div>
            <p className='compare'>{completeTodo.length} of {todos.length} tasks done</p>
            <button onClick={() => dispatch(deleteCompleted())} className="btnDelete">Remove Checked</button></div>
          )}
      </div>
    </div>
    

    
  );
}

export default App;
