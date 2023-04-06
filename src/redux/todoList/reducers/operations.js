import { ADD_TODO, DELETE_COMPLETED, REMOVE_TODO, UPDATE_TODO, UPDATE_CHECKBOX } from "../actions"

const initialState = [];

export const operations = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload]
        case DELETE_COMPLETED:
            const notCompleted = state.filter((todo) => todo.completed !== true)
            return notCompleted;
            
        case REMOVE_TODO:
            const filteredTodos = state.filter((todo) => todo.id !== action.payload)
            return filteredTodos;
        case UPDATE_TODO:
            let data = action.payload;
            const updatedArray = [];
            state.map((item) => {
                if (item.id === data.id) {
                    item.id = data.id;
                    item.todo = data.todo;
                    item.completed = data.completed
                }
                updatedArray.push(item)
            })
            return updatedArray;
        case UPDATE_CHECKBOX:
            let todoArray = [];
            state.map((item) => {
                if (item.id === action.payload) {
                    item.completed = !item.completed
                }
                todoArray.push(item)
            })
            return todoArray;
    default: return state
    } 
}