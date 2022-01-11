import React, { useState } from "react";
import "./index.css";
import { Link, useParams } from "react-router-dom";
import goods from "../../products.json";

const InnerCategory = () => {
	const params = useParams();

	/** goods for unique category */
	const choosedCatt = params["id"];
	const choosedCattGoods = [];
	goods.products.map((c) => {
		if (c["cat"] == choosedCatt) {
			choosedCattGoods.push(c);
		}
	});

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

	/** const [filters, setFilters] = useState();
const items = useMemo(() => allItems.filter(item => как хочешь фильтруй), [filters])
*/
	/*	const [state, setState] = useState({
		choosedCattGoods,
		category: "all",
	});
	function handleChange({ target: { name, value } }) {
		setState((prev) => ({ ...prev, [name]: value }));
	}
	let data = state.data;
	if (state.category && state.category !== "all") {
		data = data.filter((d) => d.category === state.category);
	}
	if (state.priceStart) {
		data = data.filter((d) => Number(d.price) >= Number(state.priceStart));
	}
	if (state.priceEnd) {
		data = data.filter((d) => Number(d.price) <= Number(state.priceEnd));
	}
*/
	const checkIn = () => {
		console.log("ohoho");
	};
	let originalChars = new Array();
	const filter = goods.products.map((resultus) => {
		if (resultus.cat == choosedCatt) {
			const allChar = Object.values(resultus.characteristics);
			for (let index = 0; index < allChar.length; index++) {
				const element = allChar[index];
				if (!originalChars.includes(element)) {
					originalChars.push(element);
				}
			}

			/*		
				let catChar = goods.products.map((resultus) => {
		[...new Set(resultus.characteristics)];
		console.log(catChar);
	});
			*/
		}
	});
	console.log(originalChars);
	let i = 0;
	const filtered = originalChars.map((a) => {
		if (a !== "") {
			return (
				<li key={i++}>
					<span onClick={checkIn()}>{a}</span>
				</li>
			);
		}
	});

	return (
		<div className='inner-menu-block'>
			<div className='col-2 inner-filter-block'>
				Filter
				<ul>{filtered}</ul>
			</div>
			<div className='col-10 d-flex flex-wrap flex-row'>
				<div className='col-12'>
					<h2>Inner Category</h2>
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
};

export default InnerCategory;
