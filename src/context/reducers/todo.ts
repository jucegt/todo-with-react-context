import { ITodo, TTodoAction, TTodoState } from 'src/definitions/ITodo';

const TodoReducer = (state: TTodoState, action: TTodoAction) => {
	switch(action.type) {
		case "ADD":
			return {
				...state,
				todos: [...state.todos, action.payload]
			};
		case "DELETE":
			return {
				...state,
				todos: state.todos.filter((todo: ITodo) => todo.id !== action.payload)
			};
		default:
			return state;
	}
};

export {
	TodoReducer
}