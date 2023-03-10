import { ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import useTask from '../hooks/useTask';

function FormAsk() {

  const {
    infoUser,
    setInfoUser,
    setValidQuestions,
    handleSubjectValue,
    inputs,
    subjectValues,
    setSubjectValues
  } = useTask();

  const regex = /^[+0-9]*$/;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInfoUser({
      ...infoUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(Object.values(infoUser).includes('')) {
      toast.error('Todos los campos son obligatorios');
      return;
    }

    if(subjectValues.length <=0) {
      toast.error('Ingresa el nombre de las asignaturas');
      return;
    }

    setValidQuestions(true);

  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === 'subject' && !regex.test(e.target.value)) {
      e.target.value = e.target.value.slice(0, -1);
      toast.error('No ingrese letras');
      return;
    }

    if(e.target.name === 'subject' && e.target.value.length === 0) {
      setSubjectValues([]);
      return;
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <form
        onSubmit={handleSubmit}
        className='bg-white p-5 shadow rounded-md mx-5 w-[600px] md:mx-auto'
      >
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="name" className='uppercase font-bold text-gray-700'>Nombre</label>
          <input
            type='text'
            className="bg-gray-100 rounded focus:outline-blue-500 focus:shadow placeholder:text-gray-800 p-2 pl-4"
            placeholder="Ingresa tu nombre"
            name='name'
            value={infoUser.name}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="name" className='uppercase font-bold text-gray-700'>
            Numero de asignaturas
          </label>
          <input
            type='tel'
            className="bg-gray-100 rounded focus:outline-blue-500 focus:shadow placeholder:text-gray-800 p-2 pl-4"
            placeholder="Ingresa el numero de asignaturas"
            name='subject'
            value={infoUser.subject}
            onChange={handleChange}
            max={5}
            min={1}
            maxLength={1}
            onInput={handleInput}
          />
        </div>

        {inputs.map((input, i) => (
          <div className="flex flex-col gap-3 mb-3" key={i}>
            <label htmlFor="name" className='uppercase font-bold text-gray-700'>{`Asignatura ${i + 1}`}</label>
            <input
              type='text'
              className="bg-gray-100 rounded focus:outline-blue-500 focus:shadow placeholder:text-gray-800 p-2 pl-4"
              placeholder={`Ingresa el nombre de la asignatura ${i + 1}`}
              name={`subject ${i + 1}`}
              value={input[i]}
              onChange={e => handleSubjectValue(e, i)}
            />
          </div>
        ))}

        <input
          type='submit'
          value='continuar'
          className='bg-sky-600 px-2 py-1 uppercase text-white rounded font-bold hover:cursor-pointer hover:bg-sky-700 transition-colors duration-300'
        />
      </form>
    </div>
  );
}

export default FormAsk;
