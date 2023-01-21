import { createContext } from 'react';

const TaskContext = createContext({});

interface Props {
  children: JSX.Element
}

export const TaskProvider = ({ children }:Props ) => {

  return (
    <TaskContext.Provider
      value={{
        saludo: 'holaaaaa'
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
