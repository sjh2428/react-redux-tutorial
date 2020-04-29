import React from 'react';
import useAsyncCounter from '../hooks/useAsyncCounter';

const CounterAsync = () => {
  const { count, onDecreaseAsync, onIncreaseAsync } = useAsyncCounter();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncreaseAsync}> +1 </button>
      <button onClick={onDecreaseAsync}> -1 </button>
    </div>
  );
};

export default CounterAsync;
