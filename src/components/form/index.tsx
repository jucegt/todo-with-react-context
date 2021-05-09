// Packages
import React, { useContext, useState } from 'react';
import { addTodo } from 'src/context/actions/todo';
import { TodoContext } from 'src/context/providers/todo';

// Styles
import { FormWrapper, FormRow, FormInput, FormButton } from './style';

const Form: React.FC = () => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const { dispatch } = useContext(TodoContext);

	const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const target = e.target;
		const id = target.getAttribute('id');
		const value = target.value;

		if (id === 'name') setName(value);
		if (id === 'description') setDescription(value);
	};
	const handlerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const date = new Date();

		if (name !== '' && description !== '') {
			dispatch(
				addTodo({
					id: date.getTime(),
					name,
					description,
					date: date
				})
			);
			setName('');
			setDescription('');
		}
	};
	return (
		<FormWrapper>
			<FormRow>
				<FormInput onChange={handlerChange} id="name" value={name} type="text" placeholder="Name" />
			</FormRow>
			<FormRow>
				<FormInput onChange={handlerChange} id="description" value={description} type="text" placeholder="Description" />
			</FormRow>
			<FormButton onClick={handlerClick}>Add</FormButton>
		</FormWrapper>
	);
};

export default Form;