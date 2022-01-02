import React from "react";
import "./index.css";
import tests from "../../products.json";
import { useParams } from "react-router-dom";

const InnerProduct = () => {
	const parametr = useParams();
	/** all categorries 
	const nameOfCatts = tests.map((c) => c["cat"]);
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
*/

	/** goods for unique category 
	const choosedCatt = "Нерозкладні";
	const choosedCattGoods = [];
	tests.map((c) => {
		if (c["cat"] == choosedCatt) {
			choosedCattGoods.push(c);
		}
	});
	console.log(choosedCattGoods);
*/

	/** all goods 
	const blocks = tests.map((results) => {
		return (
			<div
				className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4'
				key={results["id"]}
			>
				<figure>
					<img src={results["image"]} alt={results["name"]} />
					<figcaption>{results["name"]}</figcaption>
				</figure>
			</div>
		);
	});
*/
	/** !!! */

	const choosedProd = parametr["id"];
	console.log(choosedProd);
	const choosedProdGoods = [];
	tests.map((c) => {
		if (c["name"] == choosedProd) {
			choosedProdGoods.push(c);
		}
	});
	console.log(choosedProdGoods);

	const goods = choosedProdGoods.map((results) => {
		return (
			<div
				className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4'
				key={results["id"]}
			>
				<figure>
					<img src={results["image"]} alt={results["name"]} />
					<figcaption>{results["name"]}</figcaption>
				</figure>
			</div>
		);
	});

	return (
		<div className='inner-menu-block'>
			<div className='col-12'>
				<h2>Inner Product</h2>
			</div>
			{goods}
		</div>
	);

	/* return( 
		tests.map((results) => {
		return (
			<div
				className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4'
				key={results["id"]}
			>
				<figure>
					<img src={results["image"]} alt={results["name"]} />
					<figcaption>{results["name"]}</figcaption>
				</figure>
			</div>
		);
	}));
 */

	/*return (
		<div className='inner-menu-block'>
			<div className='col-12'>
				<h2>Inner Product</h2>
			</div>

			<div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4'>
				<figure>
					<img src={A} alt='Прямі дивани' />
					<figcaption>Прямі дивани</figcaption>
				</figure>
			</div>
			<div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4'>
				<a href='#'>
					<figure>
						<img src={B} alt='Кутові дивани' />
						<figcaption>Кутові дивани</figcaption>
					</figure>
				</a>
			</div>
			<div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4'>
				<a href='#'>
					<figure>
						<img src={C} alt='Нерозкладні дивани' />
						<figcaption>Нерозкладні дивани</figcaption>
					</figure>
				</a>
			</div>
			<div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4'>
				<a href='#'>
					<figure>
						<img src={D} alt='Крісла та пуфи' />
						<figcaption>Крісла та пуфи</figcaption>
					</figure>
				</a>
			</div>
			<div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4'>
				<a href='#'>
					<figure>
						<img src={E} alt="М'які ліжка" />
						<figcaption>М'які ліжка</figcaption>
					</figure>
				</a>
			</div>
			<div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4'>
				<a href='#'>
					<figure>
						<img src={F} alt='Крісло-мішок' />
						<figcaption>Крісло-мішок</figcaption>
					</figure>
				</a>
			</div>
			<div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4'>
				<a href='#'>
					<figure>
						<img src={G} alt='Дитячі дивани' />
						<figcaption>Дитячі дивани</figcaption>
					</figure>
				</a>
			</div>
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
	);*/
};

export default InnerProduct;
