import React from "react";
import logo from "../../logo.svg";
import viber from "../../img/viber.png";
import whatsapp from "../../img/whats.png";
import telegram from "../../img/telega.png";
import "./index.css";
const Header = () => {
	return (
		<div className='container'>
			<header>
				<div className='col-4'></div>
				<div className='col-4'>
					<img src={logo} className='App-logo' alt='logo' />
				</div>
				<div className='col-4'>
					<a href='tel:+38(093)-424-92-54'>+38(093)-424-92-54</a>
					<div className='col-4'>
						<a href='#'>
							<img src={viber} alt='viber' />
						</a>
					</div>
					<div className='col-4'>
						<a href='#'>
							<img src={whatsapp} alt='whatsapp' />
						</a>
					</div>
					<div className='col-4'>
						<a href='#'>
							<img src={telegram} alt='telegram' />
						</a>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
