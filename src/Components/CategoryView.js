import React from "react";
import { AwesomeButton } from "react-awesome-button";
import { addCard } from "../Actions";
import { connect } from "react-redux";
import Cards from "./Cards";
import "react-awesome-button/dist/styles.css";
import "./CategoryView.css";

// The Rest
const CategoryView = (props) => {
	const addNewCard = () => props.dispatch(addCard());

	return (
		<div className="container">
			<div className="header">
				<div className="title">
					<h1>To Do List</h1>
				</div>

				<div className="add-card-button">
					<AwesomeButton onPress={addNewCard} size="large">
						+
					</AwesomeButton>
				</div>
			</div>
			{props.cards.map((el, i) => {
				return <Cards key={i} />;
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cards: state.addCard,
	};
};

export default connect(mapStateToProps)(CategoryView);

const CategoryChildren = ({ allToDo }) => {
	return (
		<div
			className="children-container"
			style={{
				display: "flex",
				flexDirection: "column",
				alignContent: "space-evenly",
			}}
		>
			{/* first child List */}
			<ul
				style={{
					listStyleType: "none",
					padding: 0,
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-around",
					marginTop: 10,
					marginBottom: 10,
					marginLeft: 40,
				}}
			>
				{/* {childLists.map((el, i) => {
					return (
						<li key={i}>
							<CategoryChildrenContent />
						</li>
					);
				})} */}

				<li>
					<div className="new-list-button">
						<AwesomeButton>+</AwesomeButton>
					</div>
				</li>
			</ul>
		</div>
	);
};
const CategoryChildrenContent = () => {
	return (
		<div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<div>
					<AwesomeButton>+</AwesomeButton>
				</div>
				<div className="title">
					<input placeholder="Things To Do" type="text"></input>
				</div>
				{/* collapsible desc */}
				<div className="description">
					<p></p>
				</div>
				<div
					className="Category buttons"
					style={{ display: "flex", justifyContent: "space-between" }}
				>
					<AwesomeButton type="secondary"> Category</AwesomeButton>
					<AwesomeButton type="secondary"> Finished </AwesomeButton>
				</div>
			</div>
			{/* <div> IF ELSE HERE </div> */}
		</div>
	);
};

const SubList = () => {
	return (
		<ul>
			<li></li>
		</ul>
	);
};
