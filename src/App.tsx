import List from './components/list';
import Form from './components/form';
import TodoProvider from './context/providers/todo';

const App: React.FC = () => {
  return (
    <TodoProvider>
      <List />
      <Form />
    </TodoProvider>
  );
};

export default App;