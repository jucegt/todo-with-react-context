import { ITodo, TTodoAction } from 'src/definitions/ITodo';

const addTodo = (todo: ITodo): TTodoAction => ({
	type: "ADD",
	payload: todo
});

const deleteTodo = (id: number): TTodoAction => ({
	type: "DELETE",
	payload: id
});

export {
	addTodo,
	deleteTodo
};