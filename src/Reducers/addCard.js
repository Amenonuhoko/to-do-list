const addCard = (state = [], action) => {
	switch (action.type) {
		case "ADD_CARD":
			return [
				...state,
				{
					cardID: state[state.length - 1]
						? state[state.length - 1].cardID + 1
						: 0,
					text: action.text,
					active: true,
				},
			];
		default:
			return state;
	}
};
export default addCard;
