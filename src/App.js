import React from 'react'
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Pages/Home";
import AboutUs from "./components/Pages/AboutUs";
import Catalogs from "./components/Pages/Catalogs";
import Contacts from "./components/Pages/Contacts";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import InnerCategory from './components/Pages/InnerCategory';
import InnerProduct from './components/Pages/InnerProduct';

function App() {
	return (
		<div className='App'>

			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/catalogs" element={<Catalogs />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/InnerCategory/:id" element={<InnerCategory />} />
					<Route path="/InnerProduct/:id" element={<InnerProduct />} />
				</Routes>

				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
