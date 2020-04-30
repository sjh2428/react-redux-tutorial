import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import {
  increase,
  increaseAsync,
  decrease,
  decreaseAsync,
  increaseBy,
  increaseByAsync,
} from '../modules/counter2';

const useCounter = () => {
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

  return {
    count,
    onIncrease,
    onIncreaseAsync,
    onDecrease,
    onDecreaseAsync,
    onIncreaseBy,
    onIncreaseByAsync,
  };
};

export default useCounter;
