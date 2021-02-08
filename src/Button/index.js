import React from "react";
import "./Button.css";

function Button(props) {
	return (
		<div className="btn-container">
			<button
				className={`btn btn-${props.variant} btn-${props.size} `}
				onClick={props.onClick}
			>
				{props.content}
			</button>
		</div>
	);
}
export default Button;
