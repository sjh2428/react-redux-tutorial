import { increaseAsync, decreaseAsync } from '../modules/counterAsync';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';

const useAsyncCounter = () => {
  const count = useSelector((state: RootState) => state.counterAsync);
  const dispatch = useDispatch();

  const onIncreaseAsync = () => {
    dispatch(increaseAsync());
  };
  const onDecreaseAsync = () => {
    dispatch(decreaseAsync());
  };

  return {
    count,
    onIncreaseAsync,
    onDecreaseAsync,
  };
};

export default useAsyncCounter;
