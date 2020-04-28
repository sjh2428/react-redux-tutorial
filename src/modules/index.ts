import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
// import todos from './todos/todosRefactor';

const rootReducer = combineReducers({ counter, todos });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
