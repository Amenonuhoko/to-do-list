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
			<div className="header-card">
				<div className="title">
					<h1>To Do List</h1>
				</div>

				<div className="add-card-button">
					<input
						placeholder="Add To Dos"
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
				return <Cards key={i} id={el.cardID} />;
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

// const CategoryChildrenContent = () => {
// 	return (
// 		<div>
// 			<div
// 				style={{
// 					display: "flex",
// 					justifyContent: "space-between",
// 				}}
// 			>
// 				<div>
// 					<AwesomeButton>+</AwesomeButton>
// 				</div>
// 				<div className="title">
// 					<input placeholder="Things To Do" type="text"></input>
// 				</div>
// 				{/* collapsible desc */}
// 				<div className="description">
// 					<p></p>
// 				</div>
// 				<div
// 					className="Category buttons"
// 					style={{ display: "flex", justifyContent: "space-between" }}
// 				>
// 					<AwesomeButton type="secondary"> Category</AwesomeButton>
// 					<AwesomeButton type="secondary"> Finished </AwesomeButton>
// 				</div>
// 			</div>
// 			{/* <div> IF ELSE HERE </div> */}
// 		</div>
// 	);
// };

// const SubList = () => {
// 	return (
// 		<ul>
// 			<li></li>
// 		</ul>
// 	);
// };
