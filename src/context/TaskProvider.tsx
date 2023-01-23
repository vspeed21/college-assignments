import { createContext, useState } from 'react';
import swal from 'sweetalert';

import { toast } from 'react-toastify';
import { InfoUser, Task } from '../interface';

const TaskContext = createContext({});

interface Props {
  children: JSX.Element
}

export const TaskProvider = ({ children }:Props ) => {
  const [infoUser, setInfoUser] = useState<InfoUser>({
    name: '',
    subject: '',
  });
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<Partial<Task>>({});

  const [validQuestions, setValidQuestions] = useState(false);

  // Generar el estado de cada uno de las materias dinamicamente
  const inputs = Array.from({length: Number(infoUser.subject)}, (_, i) => i);
  const [subjectValues, setSubjectValues] = useState<string[]>(inputs.map(() => ''));

  function handleSubjectValue(e: React.ChangeEvent<HTMLInputElement>, i: number) {
    // const newInputValues = {...subjectValues};
    subjectValues[i] = e.target.value;
    setSubjectValues([...subjectValues]);
  }

  function handleTask(task:Task) {
    if(task.id) {
      const updatedTasks = tasks.map( t => t.id === task.id ? task : t);
      setTasks(updatedTasks);
      setTask({});
    }else {
      task.id = crypto.randomUUID();
      setTasks([...tasks, task]);
      toast.success('Tarea agregada correctamente');
    }
  }

  function deleteTask(id?: string) {
    swal({
      title: '¿Estas seguro?',
      text: 'No se podra recuperar la informacion de esta tarea',
      icon: 'warning',
      buttons: ['CANCELAR', 'CONFIRMAR'],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          const updatedTasks = tasks.filter(t => t.id !== id);
          setTasks(updatedTasks);
          toast.success('Tarea eliminada correctamente');
        }
      });
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
        handleSubjectValue,
        handleTask,
        tasks,
        task,
        setTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
