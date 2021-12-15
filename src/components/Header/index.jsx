import React from "react";
import logo from "../../logo.svg";
import viber from "../../img/viber.png";
import whatsapp from "../../img/whats.png";
import telegram from "../../img/telega.png";
import "./index.css";
const Header = () => {
	return (
		<header className='container'>
			<div className='col-3 menu-block'>
				<div className='menu-button'>
					<span> </span>
					<span> </span>
					<span> </span>
				</div>
			</div>
			<div className='col-5'>
				<img src={logo} className='logo' alt='logo' />
			</div>
			<div className='col-4 phones-block'>
				<div className='col-12'>
					<a href='tel:+38(093)-424-92-54' className='phone'>
						+38 (093) 424 92 54
					</a>
				</div>
				<div className='col-3'>
					<a href='#'>
						<img src={viber} alt='viber' />
					</a>
				</div>
				<div className='col-3'>
					<a href='#'>
						<img src={whatsapp} alt='whatsapp' />
					</a>
				</div>
				<div className='col-3'>
					<a href='#'>
						<img src={telegram} alt='telegram' />
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
