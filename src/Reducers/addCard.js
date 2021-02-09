const addCard = (state = [], action) => {
	switch (action.type) {
		case "ADD_CARD":
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					active: true,
				},
			];
		case "DELETE_CARD":
			return state.filter((card) => card.id !== action.id);
		default:
			return state;
	}
};
export default addCard;
