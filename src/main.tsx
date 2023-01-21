import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TaskProvider } from './context/TaskProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TaskProvider>
    <App />
  </TaskProvider>,
);
