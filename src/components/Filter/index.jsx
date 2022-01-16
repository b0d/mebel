import React, { useState, useMemo } from "react";
import "./index.css";
import goods from "../../components/products.json";

function Filter({ catt, gotProps }) {
	const choosedCattGoods = []; /** Все товары выбраной категории */
	let choosedCatt = { catt };
	let originalChars = new Array(); /** Массив всех характеристик  выбраной категории */
	let nameOfChar = new Array(); /** Массив всех характеристик  выбраной категории + их навзвания*/
	let test = new Array(); /* Массив с оригинальными навзаниями характеристик */
	let tests = new Array();
	let textForFilter = {};
	let filterStatus = "buttNotActive";

	/**FILTER  	<button onClick={() => gotProps("!!!")}></button> */
	const [filters, setFilters] = useState([]);

	if (filters.length > 0) {
		filterStatus = "buttActive";
	}
	function onResetArray() {
		setFilters([]);
	}
	function checkIn(singleValue) {
		console.log(singleValue);
	}

	const choosedFilers = filters.map((f) => {
		return (
			<div className='choosedFilter d-flex flex-row'>
				<div
					className='col-1 delButt'
					onClick={() => {
						let thisOne = f;
						setFilters(filters.filter((item) => item !== thisOne));
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
	/****** */

	let i = 0;
	tests.forEach((z) => {
		if (textForFilter[z.name]) {
			return textForFilter[z.name].push(z.descr);
		}
		textForFilter[z.name] = [z.descr];
	});

	const filter = Object.entries(textForFilter).map((e) => {
		const [keys, value] = e;
		i++;
		const singleValue = value.map((number) => {
			/* Онклик  - простая функция с ретурном СетФильтра и ГотПропс*/
			return (
				<div onClick={() => setFilters([...filters, number])}>{number}</div>
			);
		});

		return (
			<div className='filterInnerBlock' key={i + keys}>
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
			<button className={filterStatus} onClick={onResetArray}>
				Очистити фільтр
			</button>
		</div>
	);
}

export default Filter;
