import { createAction, ActionType, createReducer } from 'typesafe-actions';

// 액션 type 선언
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

// 액션 생성함수 선언
export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increaseBy = createAction(INCREASE_BY)<number>(); // payload 타입을 generic으로

// 액션 객체 타입 준비
const actions = { increase, decrease, increaseBy }; // 모든 액션 생성 함수들을 actions 객체에 넣음
type CounterAction = ActionType<typeof actions>; // ActionType을 사용하여 모든 액션 객체들의 타입을 준비

// 이 리덕스 모듈에서 관리 할 상태의 타입 선언
type CounterState = {
  count: number;
};

// 초기상태를 선언
const initialState: CounterState = {
  count: 0,
};

// 리듀서 만듦
// createReducer는 리듀서를 쉽게 만들게 해줌
// generic으로 리듀서에서 관리할 상태, 리듀서에서 처리할 모든 액션 객체들의 타입을 넣어야 함
// const counter = createReducer<CounterState, CounterAction>(initialState, {
//   [INCREASE]: (state) => ({ count: state.count + 1 }), // action을 참조할 필요가 없으면 state만 가져와도 됨
//   [DECREASE]: (state) => ({ count: state.count - 1 }),
//   [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
// });

const counter = createReducer<CounterState, CounterAction>(initialState)
  .handleAction(increase, (state) => ({ count: state.count + 1 }))
  .handleAction(decrease, (state) => ({ count: state.count - 1 }))
  .handleAction(increaseBy, (state, action) => ({
    count: state.count + action.payload,
  }));

export default counter;
