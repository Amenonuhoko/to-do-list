// Default
import React, { useState } from "react";
import { connect } from "react-redux";
// CSS
import "react-awesome-button/dist/styles.css";
import "./Cards.css";
// Redux
import { editCardTitle } from "../Actions";
import { deleteCard } from "../Actions";
// Component
import ToDo from "./ToDo";
import Button from "../Button";

const Cards = (props) => {
	// STATES
	const [collapse, setCollapse] = useState(false);
	const [title, setTitle] = useState(props.title);
	// const [completed, setCompleted] = useState(false);
	// HANDLE
	const handleCollapse = () => {
		setCollapse(collapse ? false : true);
	};
	const handleDelete = () => {
		props.dispatch(deleteCard(props.id));
	};
	// const handleComplete = () => {
	// 	setCompleted(completed ? false : true);
	// };
	const handleChange = (e) => {
		setTitle(e.target.value);
	};
	const handlePress = (e) => {
		if (e.key === "Enter") {
			const content = {
				id: props.id,
				text: title,
			};
			props.dispatch(editCardTitle(content));
		}
	};

	return (
		<div className="card-container">
			<div className="selected-card">
				<div className="top">
					<div className="card-header">
						<h3>0{props.id}.</h3>
						{console.log(props.id)}
						<Button
							size="small"
							variant="close"
							content="X"
							onClick={handleDelete}
						/>
					</div>
					<div className="left">
						<div className="hide-button">
							<Button
								onClick={handleCollapse}
								size="small"
								content={collapse ? "-" : "+"}
							/>
						</div>
						<div className="input">
							<input
								name="title"
								type="text"
								autoComplete="off"
								value={title}
								onChange={handleChange}
								onKeyDown={handlePress}
							></input>
						</div>
					</div>
					<div className="right">{collapse ? <ToDo /> : null}</div>
				</div>
				<div className="bottom">
					<div className="active-button">
						<div className="active-state" style={{ display: "flex" }}>
							<div className="button b2" id="active-button">
								<input type="checkbox" className="checkbox" />
								<div className="knobs">
									<span></span>
								</div>
								<div className="layer"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cards: state,
		todos: state.addToDo,
	};
};

export default connect(mapStateToProps)(Cards);
