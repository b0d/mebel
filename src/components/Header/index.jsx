import React from "react";
import logo from "../../logo.svg";
import viber from "../../img/viber.png";
import whatsapp from "../../img/whats.png";
import telegram from "../../img/telega.png";
import "./index.css";
const Header = () => {
	return (
		<header className='container'>
			<div className='col-3 col-sm-3 col-md-2 col-lg-3 col-xl-3 menu-block'>
				<div className='menu-button'>
					<span> </span>
					<span> </span>
					<span> </span>
				</div>
			</div>
			<div className='col-9 col-sm-9 col-md-4 col-lg-5 col-xl-5'>
				<img src={logo} className='logo' alt='logo' />
			</div>
			<div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 phones-block'>
				<div className='row'>
					<a href='tel:+38(093)-424-92-54' className='phone'>
						+38 (093) 424 92 54
					</a>
				</div>
				<div className='col-12 phones-block'>
					<div className='col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3'>
						<a href='#'>
							<img src={viber} alt='viber' />
						</a>
					</div>
					<div className='col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3'>
						<a href='#'>
							<img src={whatsapp} alt='whatsapp' />
						</a>
					</div>
					<div className='col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3'>
						<a href='#'>
							<img src={telegram} alt='telegram' />
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
