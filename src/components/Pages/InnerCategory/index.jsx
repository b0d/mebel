import React, { useState } from "react";
import "./index.css";
import { Link, useParams } from "react-router-dom";
import Filter from "../../Filter/index";
import goods from "../../products.json";

function InnerCategory() {
	const choosedCatt = useParams().id; /** Айди выбраной категории */
	const choosedCattGoods = []; /** Все товары выбраной категории */
	let nameOfCat = ""; /** Название выбраной категории */
	let originalChars = new Array(); /** Массив всех характеристик  выбраной категории */
	let nameOfChar = new Array(); /** Массив всех характеристик  выбраной категории + их навзвания*/
	let test = new Array(); /* Массив с оригинальными навзаниями характеристик */
	let tests = new Array();
	let textForFilter = {};
	const [filteredProps, setFilteredProps] = useState([]);
	const [filteredGoods, setFilteredGoods] = useState([]);
	const allItems = [];
	goods["products"].map((c) => {
		if (c["cat"] == choosedCatt) {
			choosedCattGoods.push(c);
			//setFilteredGoods({ ...filteredGoods, c });
		}
	});

	/* !!!!!!!!
	const items = useMemo(() => allItems.filter(item => {
		c["products.characteristics"] == filteredProps
		choosedCattGoods.filter((ids) => ids == filteredProps);
	}), [filters])
	
*/
	const blocks = choosedCattGoods.map((results) => {
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

	/** */

	goods.products.map((c) => {
		if (c["cat"] == choosedCatt.catt) {
			choosedCattGoods.push(c);
		}
	});

	const uniqueProdId = [...new Set(choosedCattGoods.map((item) => item.id))];

	goods["products.characteristics"].map((resultus) => {
		for (let i = 0; i < uniqueProdId.length; i++) {
			if (resultus["products.id"] === uniqueProdId[i]) {
				originalChars.push(resultus);
			}
		}
	});

	originalChars.map((f) => {
		for (let i = 0; i < goods.characteristics.length; i++) {
			if (f["characteristics.id"] === goods.characteristics[i]["id"]) {
				let newName = goods.characteristics[i]["option"];
				f = { ...f, "characteristics.name": newName };
				nameOfChar.push(f);
			}
		}
	});

	nameOfChar.map((s) => {
		for (let i = 0; i < nameOfChar.length; i++) {
			if (!test.includes(s["characteristics.name"])) {
				test.push(s["characteristics.name"]);
			}
		}
	});

	nameOfChar.map((z) => {
		for (let i = 0; i < goods.characteristics.length; i++) {
			if (z["characteristics.id"] === goods.characteristics[i]["id"]) {
				tests.push({
					descr: z.description,
					name: z["characteristics.name"],
					charID: z["characteristics.id"],
				});
			}
		}
	});

	tests.forEach((z) => {
		if (textForFilter[z.name]) {
			return textForFilter[z.name].push(z.descr);
		}
		textForFilter[z.name] = [z.descr];
	});
	/** */
	return (
		<div className='inner-menu-block'>
			<div className='col-2 inner-filter-block'>
				<Filter
					gotProps={(s) => {
						setFilteredProps([...filteredProps, s]);
						originalChars.map((e) => {
							filteredProps.forEach((element) => {
								if (e["description"] === element) {
									allItems.push(e["products.id"]);
									console.log(allItems);
								}
							});
						});
					}}
					catt={choosedCatt}
					cleanProps={(s) => {
						setFilteredProps(s);
					}}
					delOneProp={(f) => {
						setFilteredProps(filteredProps.filter((item) => item !== f));
					}}
					filteredProps={filteredProps}
					textForFilter={textForFilter}
					www={(s) => {
						setFilteredProps(s);
					}}
				/>
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
