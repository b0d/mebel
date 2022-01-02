import React from "react";
import "./index.css";
import A from "../../../img/bambini.jpg";
import B from "../../../img/baltika.jpg";
import C from "../../../img/venecia.jpg";
import D from "../../../img/gelexy.jpg";
import E from "../../../img/jenis.jpg";
import F from "../../../img/karmen.jpg";
import G from "../../../img/kendi.jpg";
import { Link, useParams } from "react-router-dom";
import goods from "../../products.json";

const InnerCategory = () => {
	const params = useParams();

	/** goods for unique category */
	const choosedCatt = params["id"];
	const choosedCattGoods = [];
	goods.map((c) => {
		if (c["cat"] == choosedCatt) {
			choosedCattGoods.push(c);
		}
	});
	console.log(choosedCattGoods);

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

	return (
		<div className='inner-menu-block'>
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
				architecto quas. Doloribus dolores temporibus, impedit animi illo error,
				expedita culpa at doloremque vel iste obcaecati!
			</p>
		</div>
	);
};

export default InnerCategory;
