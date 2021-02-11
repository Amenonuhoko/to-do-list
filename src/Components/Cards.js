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
import Toggle from "./Toggle";

const Cards = (props) => {
	// STATES
	const [collapse, setCollapse] = useState(false);
	const [title, setTitle] = useState(props.title);
	const cross = <i class="fas fa-times"></i>;
	const plus = <i class="fas fa-plus"></i>;
	const minus = <i class="fas fa-minus"></i>;
	// HANDLE
	const handleCollapse = () => {
		setCollapse(collapse ? false : true);
	};
	const handleDelete = () => {
		props.dispatch(deleteCard(props.id));
	};
	const handleChange = (e) => {
		setTitle(e.target.value);
	};
	const handleEnter = (e) => {
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
						<Button
							size="small"
							variant="close"
							content={cross}
							onClick={handleDelete}
						/>
					</div>
					<div className="left">
						<div className="hide-button">
							<Button
								onClick={handleCollapse}
								size="small"
								content={collapse ? minus : plus}
							/>
						</div>
						<div className="input">
							<input
								name="title"
								type="text"
								autoComplete="off"
								value={title}
								onChange={handleChange}
								onKeyDown={handleEnter}
							></input>
						</div>
					</div>
					<div className="right">
						{collapse ? <ToDo state={collapse} id={props.id} /> : null}
					</div>
				</div>
				<div className="bottom">
					<Toggle />
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
