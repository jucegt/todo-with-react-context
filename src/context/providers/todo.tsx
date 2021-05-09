import { createContext, useReducer } from 'react';
import { ITodoModel } from 'src/definitions/ITodo';
import { TodoReducer } from '../reducers/todo';
import { TodoDefault } from '../states/todo';

const TodoContext = createContext({} as ITodoModel);

const TodoProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(TodoReducer, TodoDefault);
	return (
		<TodoContext.Provider
			value={{
				state,
				dispatch
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};

export {
	TodoContext
};

export default TodoProvider;