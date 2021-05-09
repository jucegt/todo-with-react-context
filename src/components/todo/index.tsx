// Packages
import React, { useState } from 'react';

// Definitions
import { ITodo } from 'src/definitions/ITodo';

// Styles
import { TodoWrapper, TodoName, TodoDescription, TodoDate, TodoDelete } from './style';

const Todo: React.FC<ITodo> = ({ id, name, description, date, handlerDelete }) => {
	const [formatDate] = useState(date.toLocaleDateString( 'es', { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }));

	return (
		<TodoWrapper>
			<TodoName>{name}</TodoName>
			<TodoDescription>{description}</TodoDescription>
			<TodoDate>{formatDate}</TodoDate>
			<TodoDelete onClick={() => handlerDelete !== undefined && handlerDelete(id)}>Delete</TodoDelete>
		</TodoWrapper>
	);
};

export default Todo;