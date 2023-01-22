import useTask from '../hooks/useTask';
import Task from './Task';

function TaskList() {
  const { tasks } = useTask();

  return (
    <div className={`mt-5 overflow-auto ${tasks.length >= 2 ? 'h-72': ''}`}>
      <h2 className='text-center font-bold text-xl'>
        {tasks.length === 0 ? 'No hay tareas aún. Agrega una' : 'Listado de tareas'}
      </h2>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
}

export default TaskList;
