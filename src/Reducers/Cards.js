const Cards = (state = [], action) => {
	switch (action.type) {
		case "ADD_CARD":
			return [
				...state,
				{
					id: state[state.length - 1] ? state[state.length - 1].id + 1 : 1,
					text: action.text,
					content: [],
					completed: false,
				},
			];
		case "DELETE_CARD":
			return state.filter((card) => card.id !== action.id);
		case "ADD_TODO":
			return state.map((todo) => {
				return {
					...todo,
					content: [{ text: action.text, current: action.current }],
				};
			});
		case "ADD_TODO_LIST":
			return state.map((todo) => {
				if (todo.id === action.id) {
					return {
						...todo,
						content: [
							...todo.content,
							{ text: action.text, current: action.current },
						],
					};
				}
				return todo;
			});
		case "REMOVE_TODO":
			return state.map((todo) => {
				if (todo.id === action.id) {
					return {
						...todo,
						content: todo.content.filter((el) => el.current !== action.current),
					};
				}
				return todo;
			});
		case "TOGGLE_TODO":
			return state.map((todo) =>
				todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
			);
		default:
			return state;
	}
};

export default Cards;
