import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import Cards from "./Cards";
import editTitle from "./editTitle";

export default combineReducers({
	Cards,
	editTitle,
	visibilityFilter,
});
