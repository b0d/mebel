import React from "react";
import "./index.css";
import fb from "../../img/fb.png";
import inst from "../../img/inst.png";
export default function Footer() {
	return (
		<footer>
			<div className='col-12'>
				<ul>
					<li>
						<a href='#'>
							<img src={fb} alt='fb' />
						</a>
					</li>
					<li>
						<a href='#'>
							<img src={inst} alt='insta' />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
