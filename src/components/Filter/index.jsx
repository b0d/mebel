import React, { useState, useMemo } from "react";
import "./index.css";
import goods from "../../components/products.json";

function Filter({
	catt,
	gotProps,
	cleanProps,
	delOneProp,
	filteredProps,
	textForFilter,
}) {
	let filterStatus = "buttNotActive";

	/**FILTER  	<button onClick={() => gotProps("!!!")}></button> */
	const [filters, setFilters] = useState([]);

	if (filters.length > 0) {
		filterStatus = "buttActive";
	}

	const choosedFilers = filteredProps.map((f) => {
		return (
			<div className='choosedFilter d-flex flex-row'>
				<div
					className='col-1 delButt'
					onClick={() => {
						delOneProp(f);
						setFilters(filters.filter((item) => item !== f));
					}}
				>
					x
				</div>

				<div className='col-11'>{f}</div>
			</div>
		);
	});
	/*
	const mapById = (arr) => arr.reduce((acc, c) => ((acc[c.id] = c), acc), {});
	class DataRepository {
		constructor(products, categories, characteristics, productCharacterics) {
			this.products = mapById(products);
			this.characteristics = mapById(characteristics);
			this.categories = mapById(categories);
			this.productCharacterics = mapById(productCharacterics);
		}
		getProductsByCategory(category) {
			return Object.values(this.products).filter((p) => p.cat === category);
		}
		getProductCharacteristics(product) {
			return Object.values(this.productCharacterics).filter(
				(pC) => pC["products.id"] == product
			);
		}
		getCharacteristicsByCategory(category) {
			return new Set(      тут сет убивает дубли	на выходе
				this.getProductsByCategory(category) получаешь продукты согласно категории
					.map((p) => this.getProductCharacteristics(p.id)) выбираешь из них характеристики
					.flat() вытаскиваешь все на один уровенб массива?
					.map((v) => v["characteristics.id"]) хз, возвращаешь айди характеристик?
			);
		}
	}

*/

	const filter = Object.entries(textForFilter).map((e) => {
		const [keys, value] = e;

		const singleValue = value.map((number) => {
			return (
				<div
					onClick={() => {
						setFilters([...filters, number]);
						gotProps(number);
					}}
				>
					{number}
				</div>
			);
		});

		return (
			<div className='filterInnerBlock' key={keys}>
				<b>{keys}</b>
				<br />

				{singleValue}
			</div>
		);
	});

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
	/*	const checkIn = () => {
		console.log("ohoho");
	};
	let originalChars = new Array();
	const filter = goods.products.map((resultus) => {
		if (resultus.cat == choosedCatt) {
			const allChar = Object.values(resultus.characteristics);
			for (let i = 0; i < allChar.length; i++) {
				const element = allChar[i];
				if (!originalChars.includes(element)) {
					originalChars.push(element);
				}
			}

	
		}
	});
	
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
*/

	return (
		<div className='filterBlock'>
			{filter}
			<hr />
			{choosedFilers}
			<button className={filterStatus} onClick={() => cleanProps([])}>
				Очистити фільтр
			</button>
		</div>
	);
}

export default Filter;
