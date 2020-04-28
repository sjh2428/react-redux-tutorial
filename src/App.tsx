import React from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
// import CounterContainer from './containers/CounterContainer';
// import CounterWithoutContainer from './components/CounterWithoutContainer';

const App = () => {
  // return <CounterContainer />;
  // return <CounterWithoutContainer />;
  return (
    <>
      <TodoInsert />
      <TodoList />
    </>
  );
};

export default App;
