import { combineReducers } from 'redux';
import { operations } from './todoList/reducers/operations';

export const taskReducer = combineReducers({
  operations
})

