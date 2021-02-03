import React, { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import { connect } from "react-redux";
import "react-awesome-button/dist/styles.css";
import "./Cards.css";

const Cards = () => {
	const [collapse, setCollapse] = useState(false);
	const handleClick = () => {
		setCollapse(collapse ? false : true);
	};
	const [complete, setComplete] = useState(false);
	const handleComplete = () => {
		setComplete(complete ? false : true);
	};
	return (
		<div className="card-container">
			<div className="selected-card">
				{/* HIDE CHILD BUTTON */}
				<div className="left">
					<div className="hide-button">
						<AwesomeButton onPress={handleClick} size="icon">
							{collapse ? "-" : "+"}
						</AwesomeButton>
					</div>
					<div className="input">
						<input
							placeholder="To Dos"
							name="title"
							type="text"
							autoComplete="off"
							// ADD VALUE and HANDLER
						></input>
					</div>
				</div>
				{/* SIDE BUTTONS */}
				<div className="grouped-buttons">
					<div className="active-state" style={{ display: "flex" }}>
						<div class="button b2" id="active-button">
							<input type="checkbox" class="checkbox" />
							<div class="knobs">
								<span></span>
							</div>
							<div class="layer"></div>
						</div>
					</div>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<AwesomeButton
							type="secondary"
							size="medium"
							onPress={handleComplete}
						>
							{complete ? "COMPLETED" : null}
						</AwesomeButton>
					</div>
				</div>
			</div>
			{/* hidden child component */}
			{/* IF ELSE STATEMENT */}
		</div>
	);
};

export default Cards;
