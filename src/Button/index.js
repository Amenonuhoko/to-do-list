import React, { useState } from "react";
import "./Button.css";

function Button(props) {
	const [size] = useState(props.size);
	const [variant] = useState(props.variant);
	return (
		<button
			className={`btn btn-${variant} btn-${size} `}
			onClick={props.onClick}
		>
			{props.content}
		</button>
	);
}
export default Button;
