import { delay, put, call, takeEvery, takeLatest } from 'redux-saga/effects';

const INCREASE = 'counter/INCREASE' as const;
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC' as const;
const DECREASE = 'counter/DECREASE' as const;
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;
const INCREASE_BY_ASYNC = 'counter/INCREASE_BY_ASYNC' as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});
export const increaseByAsync = (diff: number) => ({
  type: INCREASE_BY_ASYNC,
  payload: diff,
});

function* increaseAsyncSaga() {
  yield delay(1000);
  yield put(increase());
}

function* decreaseAsyncSaga() {
  yield delay(1000);
  yield put(decrease());
}

function* increaseAsyncBySage(action: any) {
  yield delay(1000);
  const res = yield call(increaseBy, action.payload);
  yield put(increaseBy(res.payload));
}

export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseAsyncSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseAsyncSaga);
  yield takeEvery(INCREASE_BY_ASYNC, increaseAsyncBySage);
}

type Counter2Action =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseAsync>
  | ReturnType<typeof decreaseAsync>
  | ReturnType<typeof increaseBy>
  | ReturnType<typeof increaseByAsync>;

type Counter2State = {
  counter: number;
};

const initialState: Counter2State = {
  counter: 0,
};

const counter2 = (
  state: Counter2State = initialState,
  action: Counter2Action
) => {
  switch (action.type) {
    case INCREASE:
      return { counter: state.counter + 1 };
    case DECREASE:
      return { counter: state.counter - 1 };
    case INCREASE_BY:
      return { counter: state.counter + action.payload };
    default:
      return state;
  }
};

export default counter2;
