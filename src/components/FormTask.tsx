import { FormEvent, useState } from 'react';
import useTask from '../hooks/useTask';
import { toast } from 'react-toastify';

function FormTask() {
  const [nameTask, setNameTask] = useState('');
  const [dateTask, setDateTask] = useState('');
  const [subjectTask, setSubjectTask] = useState('');

  const { subjectValues, handleTask } = useTask();
  const valuesInputs = Object.values(subjectValues);

  const date = new Date();
  const minDate = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(Object.values({nameTask, dateTask, subjectTask}).includes('')) {
      toast.error('Llena los campos vacios');
      return;
    }
    handleTask({nameTask, dateTask, subjectTask});
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <form
        onSubmit={handleSubmit}
        className='bg-white p-5 shadow-lg rounded-md mx-5 w-[600px] md:mx-auto'
      >
        <div className="flex flex-col gap-3 mb-3">
          <label htmlFor="name">Nombre Tarea</label>
          <input
            type='tel'
            className="bg-gray-100 rounded focus:outline-blue-500 focus:shadow placeholder:text-gray-800 p-2 pl-4"
            placeholder='Ingresa el nombre de la tarea'
            value={nameTask}
            onChange={e => setNameTask(e.target.value)}
          />
        </div>

        <div className='flex gap-4'>
          <div className="flex flex-col gap-3 mb-3 w-1/2">
            <label htmlFor="name">Fecha de entrega</label>
            <input
              type='date'
              className="bg-gray-100 rounded focus:outline-blue-500 focus:shadow placeholder:text-gray-800 p-2 pl-4"
              value={dateTask}
              onChange={e => setDateTask(e.target.value)}
              min={minDate}
              max='2024-01-23'
            />
          </div>
          <div className="flex flex-col gap-3 mb-3 w-1/2">
            <label htmlFor="name">Asignatura</label>
            <select
              className="bg-gray-100 rounded focus:outline-blue-500 focus:shadow placeholder:text-gray-800 p-2 pl-4 hover:cursor-pointer text-center"
              value={subjectTask}
              onChange={e => setSubjectTask(e.target.value)}
            >
              <option value=''>{'--Seleccione--'}</option>
              {valuesInputs.map(input => (
                <option key={input} value={input}>{input}</option>
              ))}
            </select>
          </div>
        </div>

        <input
          type='submit'
          value='Agregar Tarea'
          className='bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-white font-bold mt-3 hover:cursor-pointer w-full'
        />
      </form>
    </div>
  );
}

export default FormTask;
