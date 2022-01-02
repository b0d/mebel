import React from "react";
import MainSlider from "../../MainSlider";
import InnerMenu from "../../InnerMenu";
import Feedback from "../../Feedback";
import "./index.css";

const Home = () => {
	return (
		<div className='home-page'>
			<MainSlider />
			<div className='container-fluid'>
				<InnerMenu />
				<Feedback />
			</div>
		</div>
	);
};

export default Home;
