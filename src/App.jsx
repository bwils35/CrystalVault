import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Main from "./Pages/Main"
import Navbar from "./Components/Navbar";

function App() {
	return (
		<>
			<div className="app">
				<Header />

				<Router>
				<Navbar />
					<Routes>
						<Route path="/" element={<About />} />
						<Route path="/Contact" element={<Contact />} />
						<Route path="/Main" element={<Main />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
