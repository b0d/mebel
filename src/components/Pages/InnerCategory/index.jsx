import React from "react";
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

	/** const [filters, setFilters] = useState();
const items = useMemo(() => allItems.filter(item => как хочешь фильтруй), [filters])
*/

	const filter = goods.products.map((results) => {
		const char = {};
		if (goods.products.cat == choosedCatt) {
			char = results.characteristics;
		}
		console.log(char);
		/*return (
			<li key={results["id"]}>
				<span>{results["name"]}</span>
				<span>{char}</span>
			</li>
		);*/
	});

	return (
		<div className='inner-menu-block'>
			<div className='col-2 inner-filter-block'>
				Filter
				<ul>{filter}</ul>
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
