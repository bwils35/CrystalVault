import React from "react";
import Carousel from "react-elastic-carousel";
import "./Home.css";
import CrystalPic from "../../Images/CrystalPic.jpg";
import SagePic from "../../Images/SagePic.jpg";
import IncensePic from "../../Images/IncensePic.jpg";
import ClothingPic from "../../Images/ClothingPic.jpg";

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 4 },
];

function About() {
	return (
		<>
			<div className="view">
				<div className="">
					<ul className="categories">
						<li>
							<a href="">Jewelery</a>
						</li>
						<li>
							<a href="">Crystal's</a>
						</li>
						<li>
							<a href="">Sage</a>
						</li>
						<li>
							<a href="">Incense</a>
						</li>
						<li>
							<a href="">Clothing</a>
						</li>
						<li>
							<a href="">Hot Offers</a>
						</li>
					</ul>
				</div>
				<div className="image_carousel">
					<Carousel breakpoints={breakPoints}>
						<img
							src={CrystalPic}
							alt="firstpics"
							className="pic_one"
						/>
						<img
							src={SagePic}
							alt="firstpics"
							className="pic_one"
						/>
						<img
							src={IncensePic}
							alt="firstpics"
							className="pic_one"
						/>
						<img
							src={ClothingPic}
							alt="firstpics"
							className="pic_one"
						/>
					</Carousel>
				</div>
			</div>
		</>
	);
}

export default About;
