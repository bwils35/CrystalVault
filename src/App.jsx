import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Contact from "./Pages/contact/Contact";
import Home from "./Pages/home/Home";
import Navbar from "./Components/StyledComponents/navbar/Navbar";
import Shop from "./Pages/shop/Shop";
import Login from "./Pages/login/Login";
import { PageLayout } from "./Components/StyledComponents/pageLayout/PageLayout";
import { Register } from "./Pages/register/Register";
import { Cart } from "./Pages/cart/Cart";

function App() {
	return (
		<>
			<div className="app">
				<Router>
					<Navbar />
					{/* <Header /> */}
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/Contact" element={<Contact />} />
						<Route path="/Main" element={<Shop />} />
						<Route path="/Login" element={<Login />} />
						<Route path="/Register" element={<Register />} />
						<Route path="/Cart" element={<Cart />} />
						<Route path="/Jewelry" element={<PageLayout />} />
						{/* <Route path="/Crystals" element={<PageTemplate key={} />} /> */}
						{/* <Route path="/Sage" element={<PageTemplate key={} />} /> */}
					</Routes>
					<Footer />
				</Router>
			</div>
		</>
	);
}

export default App;
