// Default
import React, { useState } from "react";
import { connect } from "react-redux";
// CSS
import "./Categories.css";
// Redux
import { addCard } from "../Actions";
// Components
import Cards from "./Cards";

// The Rest
const Categories = (props) => {
	// State
	const [cardTitle, setCardTitle] = useState("");
	// Handle
	const handleChange = (e) => {
		setCardTitle(e.target.value);
	};
	const handlePress = (e) => {
		if (e.key === "Enter") {
			const content = {
				text: cardTitle,
			};
			props.dispatch(addCard(content));
			setCardTitle("");
		}
	};
	return (
		<div className="container">
			<div className="card-container">
				<div className="title">
					<h1>To Do List</h1>
				</div>

				<div className="add-card-button">
					<input
						placeholder="What to do?"
						name="title"
						type="text"
						autoComplete="off"
						value={cardTitle}
						onChange={handleChange}
						onKeyDown={handlePress}
					></input>
				</div>
			</div>
			{props.cards.map((el, i) => {
				return <Cards key={i} id={el.id} title={el.text} />;
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cards: state.addCard,
	};
};

export default connect(mapStateToProps)(Categories);

// const SubList = () => {
// 	return (
// 		<ul>
// 			<li></li>
// 		</ul>
// 	);
// };
