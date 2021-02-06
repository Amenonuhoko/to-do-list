import { AwesomeButton } from "react-awesome-button";
import { connect } from "react-redux";

const ToDoList = () => {
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
export default connect()(ToDoList);
