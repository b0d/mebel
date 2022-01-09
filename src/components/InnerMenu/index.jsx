import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import data from "../products.json";

const InnerMenu = () => {
	const products = data.products;
	const cat = data.categories;

/*
	const catego = [... new Set(categories.category)]

	for (const {cat: cat, id:id, image:image } of products){
		resultz.push({id, cat, image });
	}

*/

/*
	let i = 0;
	resultz.forEach(element => {

	
		if (!element.cat !== result[i]) {
			test.push(element);
			i++;
		  }});
	console.log(test);

	/*
	  let uniq = [];
	 uniq = resultz.filter(word => !uniq.includes(word.cat));*/
/*
	for (let i=0; i<resultz.length; i++){
		if (resultz[i].cat !== result[i]) {
			test.push(resultz[i]);
		  }
	}
	console.log(test);
	console.log(result);
	console.log(resultz);
*/


	const cattBlocks = cat.map((results) => {
		return (
			<div
				className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4'
				key={results["id"]}
			>
				<Link to={`/InnerCategory/${results["id"]}`}>
					<figure>
						<img src={results["imgOfCat"]} alt={results["category"]} />
						<figcaption>{results["category"]}</figcaption>
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
