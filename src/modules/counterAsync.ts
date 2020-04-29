const INCREASE = 'INCREASE' as const;
const DECREASE = 'DECREASE' as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export const increaseAsync = () => (dispatch: any) => {
  setTimeout(() => dispatch(increase()), 1000);
};

export const decreaseAsync = () => (dispatch: any) => {
  setTimeout(() => dispatch(decrease()), 1000);
};

type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease>;

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
