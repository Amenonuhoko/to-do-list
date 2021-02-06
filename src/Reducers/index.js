import { combineReducers } from "redux";
import addToDo from "./addToDo";
import visibilityFilter from "./visibilityFilter";
import addCard from "./addCard";
import editTitle from "./editTitle";

export default combineReducers({
	addCard,
	addToDo,
	editTitle,
	visibilityFilter,
});
