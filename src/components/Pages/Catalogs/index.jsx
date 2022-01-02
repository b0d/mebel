import React from "react";
import InnerMenu from "../../InnerMenu";
import Feedback from "../../Feedback";
import "./index.css";
const Catalogs = () => {
	return (
		<div className="catalogs-page">
			<div className='container-fluid'>
				<h1>Catalogs</h1>
				<Feedback />
			</div>
		</div>
	);
};

export default Catalogs;
