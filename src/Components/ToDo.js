// Default
import { AwesomeButton } from "react-awesome-button";
import { connect } from "react-redux";
// CSS
import "react-awesome-button/dist/styles.css";
import "./Todos.css";
// Redux
import { addToDo } from "../Actions";
import ToDoList from "./ToDoList";

const ToDo = (props) => {
	const handleClick = () => {
		props.dispatch(addToDo(""));
	};
	return (
		<div className="todos-container">
			{/* first child List */}
			<ul>
				{props.todos.map((el, i) => {
					return (
						<li key={i}>
							<ToDoList id={props.todos.id} />
						</li>
					);
				})}

				<li>
					<div className="new-list-button">
						<AwesomeButton onPress={handleClick}>+</AwesomeButton>
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
