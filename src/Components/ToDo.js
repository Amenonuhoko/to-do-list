// Default
import { useState } from "react";
import { connect } from "react-redux";
// CSS
import "react-awesome-button/dist/styles.css";
import "./ToDo.css";
// Redux
import { addToDoList } from "../Actions";
import { removeToDo } from "../Actions";
// Component
import Button from "../Button";

const ToDo = (props) => {
	// State
	const [toDos, setToDos] = useState("");
	// Handle
	const handleToDoDelete = (e, currentId) => {
		const content = { id: props.id, current: currentId };
		props.dispatch(removeToDo(content));
	};
	const handleChange = (e) => {
		setToDos(e.target.value);
	};
	const handlePress = (e) => {
		if (e.key === "Enter") {
			const content = { id: props.id, text: toDos };
			props.dispatch(addToDoList(content));
			setToDos("");
		}
	};
	return (
		<div className="todos-container">
			<div className="todo-input">
				<span>
					<input
						name="title"
						type="text"
						autoComplete="off"
						placeholder="What are we doing?"
						value={toDos}
						onChange={handleChange}
						onKeyDown={handlePress}
					></input>
				</span>
			</div>
			<ul>
				{props.list.content.map((el, i) => {
					return (
						<li key={i} className="todo-list">
							<Button
								size="smaller"
								variant="remove"
								content="X"
								onClick={(e) => handleToDoDelete(e, el.current)}
							/>
							<span>{el.text}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
const mapStateToProps = (state, props) => {
	return {
		todos: state,
		list: state.Cards.find((el) => el.id === props.id) || [],
	};
};
export default connect(mapStateToProps)(ToDo);
