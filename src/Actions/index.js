export const addCard = () => {
	return {
		type: "ADD_CARD",
	};
};
let nextTodoId = 0;
export const addToDo = (text) => {
	return {
		type: "ADD_TODO",
		id: nextTodoId++,
		text,
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
