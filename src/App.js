import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopMenu from "./components/TopMenu";
import MainSlider from "./components/MainSlider";
import InnerMenu from "./components/InnerMenu";
import Feedback from "./components/Feedback";
function App() {
	return (
		<div className='App'>
			<Header />
			<TopMenu />
			<MainSlider />
			<div className='container'>
				<InnerMenu />
				<Feedback />
			</div>

			<Footer />
		</div>
	);
}

export default App;
