import { combineReducers } from "redux";
import toDos from "./toDos";
import visibilityFilter from "./visibilityFilter";
import addCard from "./addCard";

export default combineReducers({
	addCard,
	toDos,
	visibilityFilter,
});
