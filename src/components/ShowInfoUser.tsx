import useTask from '../hooks/useTask';

function ShowInfoUser() {
  const { infoUser, resetApp } = useTask();

  return (
    <div className="flex flex-col sm:flex-row justify-between m-3">
      <div className=''>
        <p className='text-xl font-bold'>
          Bienvenido: {''}
          <span className='text-blue-600 capitalize'>{infoUser.name}</span>
        </p>
      </div>

      <button
        type="button"
        className="bg-red-600 hover:bg-red-800 transition-colors duration-300 hover:cursor-pointer px-3 py-1 text-white rounded font-bold uppercase w-auto"
        onClick={resetApp}
      >
        Reiniciar datos
      </button>
    </div>
  );
}

export default ShowInfoUser;
