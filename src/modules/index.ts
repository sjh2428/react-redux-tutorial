import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
// import todos from './todos/todosRefactor';
import counterAsync from './counterAsync';

const rootReducer = combineReducers({ counter, todos, counterAsync });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
