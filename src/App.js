import "./App.css";
import Header from "./components/Header/";
import Footer from "./components/Footer";
import TopMenu from "./components/TopMenu";
import Bg from "./img/slider1.jpg";
function App() {
	return (
		<div className='App'>
			<Header />
			<TopMenu />
			<img src={Bg} alt='slider' />
			<div className='container'>
				<div className='col-12'>
					<p>.Test</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
