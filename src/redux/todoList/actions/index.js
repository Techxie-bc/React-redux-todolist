export const ADD_TODO = "ADD_TODO";
export const DELETE_COMPLETED = "DELETE_COMPLETED";
export const REMOVE_TODO = "REMOVE_TODO"
export const UPDATE_TODO = 'UPDATE_TODO'
export const UPDATE_CHECKBOX = "UPDATE_CHECKBOX"

export const addTodo = (payload) => {
    return {
        type: 'ADD_TODO',
        payload
    }
}

export const deleteCompleted = (payload) => {
    return {
        type: "DELETE_COMPLETED",
        payload
    }
}

export const removeTodo = (payload) => {
    return {
        type: "REMOVE_TODO",
        payload
    }
}

export const handleEditSubmit = (payload) => {
    return {
        type: "UPDATE_TODO",
        payload
    }
}

export const handleCheckbox = (payload) => {
    return {
        type: "UPDATE_CHECKBOX",
        payload
    }
}