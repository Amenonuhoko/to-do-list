import { AwesomeButton } from "react-awesome-button";
import { connect } from "react-redux";
import Button from "../Button";
// CSS
import "./ToDoList.css";

const ToDoList = () => {
	return (
		<div className="selected-list">
			<div className="left-todo">
				<div>
					<Button size="smaller" variant="remove" content="X" />
				</div>
				<div>
					<Button size="smaller" content="+" />
				</div>
			</div>
			<div className="right-todo">
				<div className="title">
					<input placeholder="Things To Do" type="text"></input>
				</div>
			</div>
		</div>
	);
};
export default connect()(ToDoList);
