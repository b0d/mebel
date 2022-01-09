import React from "react";
import {Link} from "react-router-dom";
import "./index.css";
const TopMenu = () => {
	return (
		<div className='container-fluid'>
			<menu>
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
					<li><a href='#'>UA</a></li>
				</ul>
			</menu>
		</div>
	);
};

export default TopMenu;
