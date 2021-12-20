import React from "react";
import "./index.css";
import A from "../../img/bambini.jpg";
import B from "../../img/baltika.jpg";
import C from "../../img/venecia.jpg";
import D from "../../img/gelexy.jpg";
import E from "../../img/jenis.jpg";
import F from "../../img/karmen.jpg";
import G from "../../img/kendi.jpg";
const InnerMenu = () => {
	return (
		<div className='inner-menu-block'>
			<div className='col-12'>
				<h2>Header h2</h2>
			</div>
			<div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4'>
				<a href='#'>
					<figure>
						<img src={A} alt='Прямі дивани' />
						<figcaption>Прямі дивани</figcaption>
					</figure>
				</a>
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
	);
};

export default InnerMenu;
