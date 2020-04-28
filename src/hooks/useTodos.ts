import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export const useTodos = () => {
  const todos = useSelector((state: RootState) => state.todos);
  return todos;
};
