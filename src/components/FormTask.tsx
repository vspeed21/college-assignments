import { FormEvent, useState, useEffect } from 'react';
import useTask from '../hooks/useTask';
import { toast } from 'react-toastify';
import TaskList from './TaskList';

function FormTask() {
  const [nameTask, setNameTask] = useState('');
  const [dateTask, setDateTask] = useState('');
  const [subjectTask, setSubjectTask] = useState('');
  const [id, setId] = useState<string>('');

  const { subjectValues, handleTask, task } = useTask();

  useEffect(() => {
    if(task?.nameTask) {
      setNameTask(task.nameTask);
      setDateTask(task.dateTask);
      setSubjectTask(task.subjectTask);
      setId(task?.id);
    }
  }, [task]);

  const valuesInputs = Object.values(subjectValues);

  const date = new Date();
  const minDate = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(Object.values({nameTask, dateTask, subjectTask}).includes('')) {
      toast.error('Llena los campos vacios');
      return;
    }
    handleTask({nameTask, dateTask, subjectTask, id});
    // Clean inputs
    setNameTask('');
    setDateTask('');
    setSubjectTask('');
    setId('');
  };

  return (
    <div
      className='bg-white p-5 shadow-lg rounded-md mx-5 w-[600px] md:mx-auto'
    >
      <form
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-3 mb-7">
          <label htmlFor="name" className='uppercase font-bold text-gray-700'>Titulo Tarea</label>
          <input
            id='name'
            type='text'
            className="bg-gray-100 rounded focus:outline-blue-500 focus:shadow placeholder:text-gray-800 p-2 pl-4"
            placeholder='Ingresa el titulo de la tarea'
            value={nameTask}
            onChange={e => setNameTask(e.target.value)}
          />
        </div>

        <div className='flex gap-4'>
          <div className="flex flex-col gap-3 mb-3 w-1/2">
            <label htmlFor="date" className='uppercase font-bold text-gray-700'>Fecha de entrega</label>
            <input
              id='date'
              type='date'
              className="bg-gray-100 rounded focus:outline-blue-500 focus:shadow placeholder:text-gray-800 p-2 pl-4"
              value={dateTask}
              onChange={e => setDateTask(e.target.value)}
              min={minDate}
              max='2024-01-23'
            />
          </div>
          <div className="flex flex-col gap-3 mb-3 w-1/2">
            <label htmlFor="subject" className='uppercase font-bold text-gray-700'>Asignatura</label>
            <select
              id='subject'
              className="bg-gray-100 rounded focus:outline-blue-500 focus:shadow placeholder:text-gray-800 p-2 pl-4 hover:cursor-pointer text-center capitalize"
              value={subjectTask}
              onChange={e => setSubjectTask(e.target.value)}
            >
              <option value=''>{'-- Seleccione --'}</option>
              {valuesInputs.map(input => (
                <option
                  key={input}
                  value={input}
                  className='capitalize'
                >
                  {input}
                </option>
              ))}
            </select>
          </div>
        </div>

        <input
          type='submit'
          value={task?.nameTask ? 'Guardar Cambios': 'Agregar Tarea'}
          className='bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-white font-bold mt-3 hover:cursor-pointer w-full uppercase'
        />
      </form>
      <TaskList/>
    </div>
  );
}

export default FormTask;
