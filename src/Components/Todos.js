// Default
import { AwesomeButton } from "react-awesome-button";
import { connect } from "react-redux";
// CSS
import "react-awesome-button/dist/styles.css";
import "./Todos.css";

const Todos = ({ allToDo }) => {
	return (
		<div className="todos-container">
			{/* first child List */}
			<ul>
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

export default connect()(Todos);
