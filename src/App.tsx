import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useTask from './hooks/useTask';
import FormAsk from './components/FormAsk';
import Admin from './components/Admin';

function App() {
  const { validQuestions } = useTask();

  return (
    <>
      <ToastContainer/>
      {validQuestions ? (
        <Admin/>
      ) : (
        <FormAsk/>
      )}
    </>
  );
}

export default App;
