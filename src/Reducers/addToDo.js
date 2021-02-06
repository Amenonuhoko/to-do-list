function nextTodoId(todos) {
	const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), 0);
	return maxId + 1;
}

const addToDo = (state = [], action) => {
	switch (action.type) {
		case "ADD_TODO":
			return [
				...state,
				{
					id: nextTodoId(state),
					text: action.text,
				},
			];
		case "EDIT_TODO":
			return [];
		case "TOGGLE_TODO":
			return state.map((todo) =>
				todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
			);
		default:
			return state;
	}
};

export default addToDo;
