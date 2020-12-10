
import { combineReducers } from 'redux';
import TodoListReducer from './TodoListReducer';

const rootReducer = combineReducers({
    TodoList: TodoListReducer,
});

export default (state, action) =>
    rootReducer(action.type === 'LOGOUT_USER' ? undefined : state, action);