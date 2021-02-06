const editTitle = (state = [], action) => {
	switch (action.type) {
		case "EDIT_CARD_TITLE":
			return [
				...state,
				{
					cardID: action.cardID,
					text: action.text,
					completed: false,
					active: true,
				},
			];
		default:
			return state;
	}
};
export default editTitle;
