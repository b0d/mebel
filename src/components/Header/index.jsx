import React, { useState } from "react";
import logo from "../../logo.svg";
import viber from "../../img/viber.png";
import whatsapp from "../../img/whats.png";
import telegram from "../../img/telega.png";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
	const [buttState, setButtState] = useState(true);
	let status = "vissible";
	if (buttState == true) {
		status = "vissible";
	} else {
		status = "hidden";
	}
	const turnOff = (e) => {
		document.querySelector("body").scrollTo(0, 1000);

		if (window.innerWidth <= 768) {
			setButtState(!buttState);
		}
	};
	return (
		<header className='container-fluid'>
			<div className='col-3 col-sm-3 col-md-2 col-lg-3 col-xl-3 menu-block'>
				<div className='menu-button' onClick={() => setButtState(!buttState)}>
					<span> </span>
					<span> </span>
					<span> </span>
				</div>
			</div>
			<div className='col-9 col-sm-9 col-md-4 col-lg-5 col-xl-4'>
				<img src={logo} className='logo' alt='logo' />
			</div>
			<div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 phones-block'>
				<div className='col-12'>
					<a href='tel:+38(093)-424-92-54' className='phone'>
						+38 (093) 424 92 54
					</a>
				</div>
				<div className='col-12 phones-block'>
					<div className='col-4 col-sm-4 col-md-3 col-lg-3 col-xl-2'>
						<a href='#'>
							<img src={viber} alt='viber' />
						</a>
					</div>
					<div className='col-4 col-sm-4 col-md-3 col-lg-3 col-xl-2'>
						<a href='#'>
							<img src={whatsapp} alt='whatsapp' />
						</a>
					</div>
					<div className='col-4 col-sm-4 col-md-3 col-lg-3 col-xl-2'>
						<a href='#'>
							<img src={telegram} alt='telegram' />
						</a>
					</div>
				</div>
			</div>
			<div className='container-fluid'>
				<menu className={status} onClick={turnOff}>
					<ul>
						<li>
							<Link to='/'>Продукція</Link>
						</li>
						<li>
							<Link to='/catalogs'>Каталоги</Link>
						</li>
						<li>
							<Link to='/about-us'>Про нас</Link>
						</li>
						<li>
							<Link to='/contacts'>Контакти</Link>
						</li>
						<li>
							<a href='#'>UA</a>
						</li>
					</ul>
				</menu>
			</div>
		</header>
	);
};

export default Header;
