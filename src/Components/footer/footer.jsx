import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer>
            <a href="/" className="footer__logo">
                DBD
            </a>

            <ul className="permalinks">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/Contact">Contact</a>
                </li>
                <li>
                    <a href="/">Feedback</a>
                </li>
            </ul>

            <div className="footer__copyright">
                <small>&copy; DBD Commerce. All rights reserved</small>
            </div>
        </footer>
    );
};

export default Footer;
