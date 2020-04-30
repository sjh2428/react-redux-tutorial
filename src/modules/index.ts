import { combineReducers } from 'redux';
import counter2, { counterSaga } from './counter2';
import counter from './counter';
import todos from './todos';
import todosRefactor from './todos/todosRefactor';
import counterAsync from './counterAsync';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  counter,
  counter2,
  todos,
  todosRefactor,
  counterAsync,
});

export function* rootSaga() {
  yield all([counterSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
