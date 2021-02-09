let idCount = 1;
export const addCard = (payload) => {
	const content = { id: idCount++, text: payload.text };
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
export const addToDo = (payload) => {
	const content = { text: payload.text };
	return {
		type: "ADD_TODO",
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
