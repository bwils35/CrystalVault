import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Main from "./Pages/Main"
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer/Footer";

function App() {
	return (
		<>
			<div className="app">
				<Router>
					<Navbar />
					<Header />


					<h1>jkaslndkjasnd</h1>
					<Routes>
						<Route path="/" element={<About />} />
						<Route path="/Contact" element={<Contact />} />
						<Route path="/Main" element={<Main />} />
					</Routes>
					<Footer />
				</Router>
			</div>
		</>
	);
}

export default App;
