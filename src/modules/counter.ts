// 액션 타입 선언

const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});
// 값의 이름을 payload로 바꾼 이유는 FSA 규칙을 따르기 위함
// 이 규칙을 따름으로써 액션 객체의 구조를 일관성 있게 가져갈 수 있어서 추후 리듀서에서 액션을 다룰 때에도
// 편하고, 읽기 쉽고, 액션에 관련된 라이브러리를 사용할 수도 있게 해줌
// 다만 꼭 따를 필요는 없으니 FSA가 불-편하면 payload라고 넣을 필요는 없음

type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

const counter = (state: CounterState = initialState, action: CounterAction) => {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

export default counter;
