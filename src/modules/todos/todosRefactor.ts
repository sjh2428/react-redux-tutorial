import { createAction, ActionType, createReducer } from 'typesafe-actions';

// 액션 타입 선언
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';

export const addTodo = createAction(ADD_TODO)<string>();
export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();

const actions = {
  addTodo,
  toggleTodo,
  removeTodo,
};
type TodosAction = ActionType<typeof actions>;

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = Todo[];

const initialState: TodosState = [{ id: 0, text: '123', done: false }];

const todos = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, { payload: text }) =>
    state.concat({
      id: Math.max(...state.map((todo) => todo.id), state.length) + 1,
      text,
      done: false,
    }),
  [TOGGLE_TODO]: (state, { payload: id }) =>
    state.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ),
  [REMOVE_TODO]: (state, { payload: id }) =>
    state.filter((todo) => todo.id !== id),
});

export default todos;
