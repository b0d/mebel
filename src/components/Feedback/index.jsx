import React from "react";
import "./index.css";
const Feedback = () => {
	return (
		<section className="feedback-block">
			<div className="col-12"><span>Get the price</span></div>
			<div className="feedback-form">
				<form action="" method="post">
					<input type="text" name="" id="" placeholder="Ваше имя" />
					<input type="tel" name="" id="" placeholder="Номер телефона" required/>
					<button type="submit">Получить прайс</button>
				</form>
			</div>
		</section>
	);
};

export default Feedback;
