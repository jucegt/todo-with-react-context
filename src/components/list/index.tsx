// Packages
import React, { useContext } from 'react';

// Context
import { TodoContext } from 'src/context/providers/todo';

// Components
import Todo from '../todo';

// Definitions
import { ITodo } from 'src/definitions/ITodo';

// Styles
import { ListWrapper, ListHeader, ListText } from './style';
import { deleteTodo } from 'src/context/actions/todo';

const List: React.FC = () => {
	const { state, dispatch } = useContext(TodoContext);

	const handlerDelete = (id: number) => {
		dispatch(deleteTodo(id));
	};
	return (
		<ListWrapper>
			{state !== undefined && (
				state.todos.length !== 0 ? (
					<>
						<ListHeader>ToDo</ListHeader>
						{state.todos.map((todo: ITodo) => 
							<Todo
								key={todo.id}
								id={todo.id}
								name={todo.name}
								description={todo.description}
								date={todo.date}
								handlerDelete={handlerDelete}
							/>
						)}
					</>
				) : (
					<ListText>You have nothing added yet.</ListText>
				)
			)}
		</ListWrapper>
	);
};

export default List;