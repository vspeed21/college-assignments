import useTask from './hooks/useTask';
import FormAsk from './components/FormAsk';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { validQuestions } = useTask();

  return (
    <>
      <ToastContainer/>
      {validQuestions ? (
        <p>admin</p>
      ) : (
        <FormAsk/>
      )}
    </>
  );
}

export default App;
