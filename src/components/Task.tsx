import { Task } from '../interface';

interface Props {
  task: Task
}

function TaskC({task}:Props) {
  return (
    <div className='bg-gray-100 shadow my-5 rounded p-2 mx-2'>
      <h3 className='text-center uppercase text-lg'>{task.nameTask}</h3>

      <div className='flex justify-between mt-3 items-center'>
        <div className='flex flex-col gap-2'>
          <p>
            Asignatura: {''}
            <span className='font-bold'>{task.subjectTask}</span>
          </p>
          <p>
            Fecha de entrega: {''}
            <span className='font-bold'>{task.dateTask}</span>
          </p>
        </div>

        <div className='flex flex-col gap-2'>
          <button
            type='button'
            className='px-4 py-1.5 rounded transition-colors duration-300 hover:cursor-pointer bg-sky-600 hover:bg-sky-800 text-white font-bold'
          >
            Editar
          </button>
          <button
            type='button'
            className='px-4 py-1.5 rounded transition-colors duration-300 hover:cursor-pointer bg-red-600 hover:bg-red-800 text-white font-bold'
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskC;
