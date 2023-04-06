import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, handleCheckbox } from '../redux/todoList/actions';
import { FiEdit2 } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa';

const TaskTodos = ({handleEditClick, editFormVisibility}) => {
    const todos = useSelector((state) => state.operations);
    const dispatch = useDispatch()
    console.log(todos)
    return  todos.map((todo) => (
        <div key={todo.id} className="todo">
            <div className="content">
                {
                    editFormVisibility === false && (
                       
                        <input type="checkbox" checked={todo.completed} onChange={() => dispatch(handleCheckbox(todo.id))} />
                    )
                }

                <p style={todo.completed === true ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{todo.todo}</p>
            </div>
            <div className="actions-part">
                {
                    editFormVisibility === false && (
                    <>
                            <span onClick={()=>handleEditClick(todo)}><FiEdit2 /></span>
                            <span onClick={() => dispatch(removeTodo(todo.id))} className="cancel"><FaTimes /></span>
                        </>
                    )
                }
            </div>
        </div>

    ))
}
export default TaskTodos;