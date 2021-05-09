import React from "react";

export interface ITodo {
	id: number,
	name: string,
	description: string,
	date: Date,
	handlerDelete?: (id: number) => void
};

export type TTodoState = {
	todos: ITodo[]
}

interface IAddAction {
	type: 'ADD',
	payload: ITodo
}

interface IDeleteAction {
	type: 'DELETE',
	payload: number
}

export interface ITodoModel {
	state: TTodoState,
	dispatch: React.Dispatch<TTodoAction>
}

export type TTodoAction = IAddAction | IDeleteAction;