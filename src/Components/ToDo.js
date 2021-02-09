// Default
import { AwesomeButton } from "react-awesome-button";
import { connect } from "react-redux";
// CSS
import "react-awesome-button/dist/styles.css";
import "./ToDo.css";
// Redux
import { addToDo } from "../Actions";
import ToDoList from "./ToDoList";
// Component
import Button from "../Button";

const ToDo = (props) => {
	const handleClick = () => {
		props.dispatch(addToDo(""));
	};
	return (
		<div className="todos-container">
			<ul>
				{props.todos.map((el, i) => {
					return (
						<li key={i}>
							<ToDoList id={props.id} />
						</li>
					);
				})}

				<li>
					<div className="new-list-button">
						<Button
							size="smaller"
							variant="remove"
							onClick={handleClick}
							content="+"
						/>
					</div>
				</li>
			</ul>
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		todos: state.addToDo,
	};
};
export default connect(mapStateToProps)(ToDo);
