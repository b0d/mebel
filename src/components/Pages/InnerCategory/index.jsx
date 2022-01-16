import React, { useState } from "react";
import "./index.css";
import { Link, useParams } from "react-router-dom";
import Filter from "../../Filter/index";
import goods from "../../products.json";

function InnerCategory() {
	const choosedCatt = useParams().id; /** Айди выбраной категории */
	const choosedCattGoods = []; /** Все товары выбраной категории */
	let nameOfCat = ""; /** Название выбраной категории */
	const [gotProps, setGotProps] = useState();

	goods.products.map((c) => {
		if (c["cat"] == choosedCatt) {
			choosedCattGoods.push(c);
		}
	});
	/* !!!!!!!!
	const items = useMemo(() => allItems.filter(item => {
		c["products.characteristics"] == gotProps
		choosedCattGoods.filter((ids) => ids == gotProps);
	}), [filters])
	
*/
	const blocks = choosedCattGoods.map((results) => {
		// console.log(results);
		return (
			<div
				className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4'
				key={results["id"]}
			>
				<Link to={`/InnerProduct/${results["name"]}`}>
					<figure>
						<img src={results["image"]} alt={results["name"]} />
						<figcaption>{results["name"]}</figcaption>
					</figure>
				</Link>
			</div>
		);
	});

	goods.categories.map((n) => {
		if (n.id == Number(choosedCatt)) {
			nameOfCat = n.category;
		}
	});

	return (
		<div className='inner-menu-block'>
			<div className='col-2 inner-filter-block'>
				<Filter gotProps={(s) => setGotProps(s)} catt={choosedCatt} />
			</div>
			<div className='col-10 d-flex flex-wrap flex-row'>
				<div className='col-12'>
					<h1>{nameOfCat}</h1>
				</div>
				{blocks}

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
					laboriosam maiores, quaerat cumque facere architecto quas. Doloribus
					dolores temporibus, impedit animi illo error, expedita culpa at
					doloremque vel iste obcaecati!Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Dicta laboriosam maiores, quaerat cumque facere
					architecto quas. Doloribus dolores temporibus, impedit animi illo
					error, expedita culpa at doloremque vel iste obcaecati!
				</p>
			</div>
		</div>
	);
}

export default InnerCategory;
