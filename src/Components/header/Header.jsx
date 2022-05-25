import React from "react";
import Navbar from "../Navbar";
import "./Header.css";
// import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
	return (
		<>
			<header>
				<Navbar />
				<div className="header__container">
					<h5>Welcome to...</h5>
				</div>
			</header>
		</>
	);
};

export default Header;
