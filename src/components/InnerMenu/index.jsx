import React from "react";
import "./index.css";
import { Link, useParams } from "react-router-dom";
import catts from "../products-cat.json";

const InnerMenu = () => {
	/** all categorries */
	const nameOfCatts = catts.map((c) => c["cat"]);
	function unique(arr) {
		let result = [];
		for (let str of arr) {
			if (!result.includes(str)) {
				result.push(str);
			}
		}
		console.log(result);
	}
	unique(nameOfCatts);
	/** */

	const cattBlocks = catts.map((results) => {
		return (
			<div
				className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4'
				key={results["id"]}
			>
				<Link to={`/InnerCategory/${results["cat"]}`}>
					<figure>
						<img src={results["image"]} alt={results["cat"]} />
						<figcaption>{results["cat"]}</figcaption>
					</figure>
				</Link>
			</div>
		);
	});
	/** */
	return (
		<div className='inner-menu-block'>
			<div className='col-12'>
				<h2>Header h2</h2>
			</div>

			{cattBlocks}
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
				laboriosam maiores, quaerat cumque facere architecto quas. Doloribus
				dolores temporibus, impedit animi illo error, expedita culpa at
				doloremque vel iste obcaecati!Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Dicta laboriosam maiores, quaerat cumque facere
				architecto quas. Doloribus dolores temporibus, impedit animi illo error,
				expedita culpa at doloremque vel iste obcaecati!
			</p>
		</div>
	);
};

export default InnerMenu;
