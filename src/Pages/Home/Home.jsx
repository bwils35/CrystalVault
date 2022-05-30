import React from "react";
import Carousel from "react-elastic-carousel";
import "./Home.css";
import CrystalPic from "../../Images/CrystalPic.jpg";
import SagePic from "../../Images/SagePic.jpg";
import IncensePic from "../../Images/IncensePic.jpg";
import ClothingPic from "../../Images/ClothingPic.jpg";
import { useNavigate } from "react-router-dom";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

// TODO: change About to Home
function About() {
    return (
        <>
            <div className="view">
                <div className="">
                    <ul className="categories">
                        <li className="dropdown">
                            <a className="simbutton" href="/Jewelry">
                                Jewelery
                            </a>
                            <div>
                                <a href="/Jewelry">Mens Jewelry</a>
                                <a href="/Jewelry">Womens Jewelry</a>
                            </div>
                        </li>
                        <li className="dropdown">
                            <a className="simbutton" href="">
                                Crystal's
                            </a>
                            <div>
                                <a href="">Rose Quartz</a>
                                <a href="">Obsidian</a>
                                <a href="">Jasper</a>
                            </div>
                        </li>
                        <li className="dropdown">
                            <a className="simbutton" href="">
                                Sage
                            </a>
                            <div>
                                <a href="">White Sage</a>
                                <a href="">Blue Sage</a>
                                <a href="">Desert Sage</a>
                            </div>
                        </li>
                        <li className="dropdown">
                            <a className="simbutton" href="">
                                Incense
                            </a>
                            <div>
                                <a href="">Traditional Sticks</a>
                                <a href="">Biggies</a>
                                <a href="">Shorties</a>
                            </div>
                        </li>
                        <li className="dropdown">
                            <a className="simbutton" href="">
                                Clothing
                            </a>
                            <div>
                                <a href="">Mens Clothing</a>
                                <a href="">Womens Clothing</a>
                            </div>
                        </li>
                        <li className="dropdown">
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
