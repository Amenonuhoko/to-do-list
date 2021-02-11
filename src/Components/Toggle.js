const Toggle = () => {
	return (
		<div className="active-button">
			<div className="active-state" style={{ display: "flex" }}>
				<div className="button b2" id="active-button">
					<input type="checkbox" className="checkbox" />
					<div className="knobs">
						<span></span>
					</div>
					<div className="layer"></div>
				</div>
			</div>
		</div>
	);
};
export default Toggle;
