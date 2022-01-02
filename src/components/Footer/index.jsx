import React from "react";
import "./index.css";
import fb from "../../img/fb.png";
import inst from "../../img/inst.png";
import {Link} from "react-router-dom";
export default function Footer() {
	return (
		<footer>
			<div className='col-12'>
				<Link to="/contacts">Контакти</Link> | <Link to="/about-us">Про нас</Link>
			</div>
			<div className='col-12'>
				<ul>
					<li>
						<a href='#'>
							<img src={inst} alt='insta' />
						</a>
					</li>
					<li>
						<a href='#'>
							<img src={fb} alt='fb' />	
						</a>
					</li>
				</ul>
				<p>Политика конфиденциальности</p>
			</div>
		</footer>
	);
}
