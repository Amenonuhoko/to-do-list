export const addCard = (payload) => {
	const content = { id: payload.id, text: payload.text };
	return {
		type: "ADD_CARD",
		...content,
	};
};
export const deleteCard = (id) => {
	return {
		type: "DELETE_CARD",
		id,
	};
};
export const editCardTitle = (payload) => {
	const content = { cardId: payload.cardId, text: payload.text };
	return {
		type: "EDIT_CARD_TITLE",
		...content,
	};
};
let toDoId = 1;
export const addToDo = (payload) => {
	const content = { id: toDoId++ };
	return {
		type: "ADD_TODO",
		...content,
	};
};
let currentId = 1;
export const addToDoList = (payload) => {
	const content = {
		id: payload.id,
		text: payload.text,
		current: currentId++,
	};
	return {
		type: "ADD_TODO_LIST",
		...content,
	};
};
export const removeToDo = (payload) => {
	const content = { id: payload.id, current: payload.current };
	return {
		type: "REMOVE_TODO",
		...content,
	};
};
export const setVisibilityFilter = (filter) => {
	return {
		type: "SET_VISIBILITY_FILTER",
		filter,
	};
};
export const toggleTodo = (id) => {
	return {
		type: "TOGGLE_TODO",
		id,
	};
};
export const VisibilityFilters = {
	SHOW_ALL: "SHOW_ALL",
	SHOW_COMPLETE: "SHOW_COMPLETED",
	SHOW_ACTIVE: "SHOW_ACTIVE",
};
