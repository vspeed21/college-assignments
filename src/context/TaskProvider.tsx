import { createContext, useState } from 'react';
import { InfoUser } from '../interface';

const TaskContext = createContext({});

interface Props {
  children: JSX.Element
}

export const TaskProvider = ({ children }:Props ) => {
  const [infoUser, setInfoUser] = useState<InfoUser>({
    name: '',
    subject: '',
    subjects: []
  });
  const [validQuestions, setValidQuestions] = useState(false);

  // Generar el estado de cada uno de las materias dinamicamente
  const inputs = Array.from({length: Number(infoUser.subject)}, (_, i) => i);
  const [subjectValues, setSubjectValues] = useState<string[]>(inputs.map(() => ''));

  function handleSubjectValue(e: React.ChangeEvent<HTMLInputElement>, i: number) {
    const newInputValues = {...subjectValues};
    newInputValues[i] = e.target.value;
    setSubjectValues(newInputValues);
  }

  return (
    <TaskContext.Provider
      value={{
        infoUser,
        setInfoUser,
        setValidQuestions,
        validQuestions,
        inputs,
        subjectValues,
        handleSubjectValue
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
