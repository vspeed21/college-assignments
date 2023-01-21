import { useContext } from 'react';
import TaskContext from '../context/TaskProvider';
import { ContextTaskProps } from '../context/types';

function useTask() {
  return useContext(TaskContext) as ContextTaskProps;
}

export default useTask;
