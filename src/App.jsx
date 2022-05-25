import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";

function App() {
	return (
		<>
			<div className="app">
				{/* <Navbar /> */}
				<Header />

				<Router>
					<Routes>
						<Route path="/" element={<About />} />
						<Route path="/Contact" element={<Contact />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
