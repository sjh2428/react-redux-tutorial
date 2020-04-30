import { Dispatch } from 'react';

const INCREASE = 'INCREASE' as const;
const DECREASE = 'DECREASE' as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease>;

export const increaseAsync = () => (dispatch: Dispatch<CounterAction>) => {
  setTimeout(() => dispatch(increase()), 1000);
};

export const decreaseAsync = () => (dispatch: Dispatch<CounterAction>) => {
  setTimeout(() => dispatch(decrease()), 1000);
};

const initialState = 0;

const counter = (state: number = initialState, action: CounterAction) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
