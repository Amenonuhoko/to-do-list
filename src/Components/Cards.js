// Default
import React, { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import { connect } from "react-redux";
// CSS
import "react-awesome-button/dist/styles.css";
import "./Cards.css";
// Redux
import { editCardTitle } from "../Actions";
// Component
import Todos from "./Todos";

const Cards = (props) => {
	// STATES
	const [collapse, setCollapse] = useState(false);
	const [completed, setCompleted] = useState(false);
	const [title, setTitle] = useState(props.title[props.id].text);
	// HANDLE
	const handleClick = () => {
		setCollapse(collapse ? false : true);
	};
	const handleComplete = () => {
		setCompleted(completed ? false : true);
	};
	const handleChange = (e) => {
		setTitle(e.target.value);
	};
	const handlePress = (e) => {
		if (e.key === "Enter") {
			const content = {
				cardID: props.id,
				text: title,
			};
			props.dispatch(editCardTitle(content));
		}
	};

	return (
		<div className="card-container">
			<div className="selected-card">
				<div className="left">
					<div className="hide-button">
						<AwesomeButton onPress={handleClick} size="icon">
							{collapse ? "-" : "+"}
						</AwesomeButton>
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
				<div className="right">
					<div className="active-state" style={{ display: "flex" }}>
						<div className="button b2" id="active-button">
							<input type="checkbox" className="checkbox" />
							<div className="knobs">
								<span></span>
							</div>
							<div className="layer"></div>
						</div>
					</div>
					<div style={{ display: "flex", justifyContent: "center" }}>
						{completed ? (
							<AwesomeButton
								type="secondary"
								size="medium"
								onPress={handleComplete}
							>
								COMPLETED
							</AwesomeButton>
						) : (
							<AwesomeButton
								type="primary"
								size="medium"
								onPress={handleComplete}
							></AwesomeButton>
						)}
					</div>
				</div>
			</div>
			<div>{collapse ? <Todos /> : null}</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		todos: state,
		title: state.addCard,
	};
};

export default connect(mapStateToProps)(Cards);
