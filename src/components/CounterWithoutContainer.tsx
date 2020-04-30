import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import {
  increase,
  increaseAsync,
  increaseBy,
  increaseByAsync,
  decrease,
  decreaseAsync,
} from '../modules/counter2';
// import useCounter from '../hooks/useCounter';

const CounterWithoutContainer = () => {
  // const {
  //   count,
  //   onIncrease,
  //   onIncreaseAsync,
  //   onDecrease,
  //   onDecreaseAsync,
  //   onIncreaseBy,
  //   onIncreaseByAsync,
  // } = useCounter();

  const count = useSelector((state: RootState) => state.counter2.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };
  const onIncreaseAsync = () => {
    dispatch(increaseAsync());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };
  const onDecreaseAsync = () => {
    dispatch(decreaseAsync());
  };
  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };
  const onIncreaseByAsync = (diff: number) => {
    dispatch(increaseByAsync(diff));
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}> +1 </button>
      <button onClick={onIncreaseAsync}> +1 Async </button>
      <button onClick={onDecrease}> -1 </button>
      <button onClick={onDecreaseAsync}> -1 Async </button>
      <button onClick={() => onIncreaseBy(5)}> +5 </button>
      <button onClick={() => onIncreaseByAsync(5)}> +5 Async </button>
    </div>
  );
};

export default CounterWithoutContainer;
