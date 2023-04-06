import React, { useState, useEffect } from 'react';
import '../App.css'
import { useDispatch } from 'react-redux';
import {addTodo, handleEditSubmit} from '../redux/todoList/actions'
import FiEdit2 from 'react-icons/fi'
import HiXMark from 'react-icons/hi'
import AiOutlinePlus from 'react-icons/ai'

const TaskForm = ({editFormVisibility, editTodo, cancelUpdate}) => {
  const dispatch = useDispatch()
  const [todoValue, setTodoValue] = useState('');

  const [editValue, setEditValue] = useState('')
  useEffect(() => {
    setEditValue(editTodo.todo)
  }, [editTodo])

  const handleSubmit = (e) =>{
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false

    }
    setTodoValue('');
    dispatch(addTodo(todoObj))
  }
  const editSubmit = (e) => {
    e.preventDefault();
    let editedObj = {
      id: editTodo.id,
      todo: editValue,
      completed: false
    }
    dispatch(handleEditSubmit(editedObj))
  }
  
 
  return (
    <>
      {editFormVisibility===false?(
        <form className='todoForm' onSubmit={handleSubmit}>
         
          <div className='input-and-btn'>
              <input type="text" className='form-control' required
              value={todoValue} onChange={(e)=>setTodoValue(e.target.value)}/>
              <button type="submit" className=' btnAdd'>ADD</button>
          </div>
        </form>
      ):(
        <form className='todoForm' onSubmit={editSubmit}>
          <label>Update your todo-items</label>
          <div className='input-and-btn'>
              <input type="text" className='form-control' required value={editValue || ""} onChange={(e) =>setEditValue(e.target.value) } />
              <button type="submit" className='btnAdd'>UPDATE</button>
          </div>
          <button type="button" className='btnAdd' onClick={cancelUpdate}
          >BACK</button>
        </form>
      )}
    </>
  )
}
export default TaskForm;











// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { addTask } from './taskReducer';

// const TaskInput = ({ addTask }) => {
//   const [text, setText] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (text.trim() !== '') {
//       addTask({ id: Date.now(), text });
//       setText('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Enter task"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default connect(null, { addTask })(TaskInput);