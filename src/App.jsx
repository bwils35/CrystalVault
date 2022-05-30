import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/footer/footer";
// import {Header} from "./Components/header/Header";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/StyledComponents/Navbar/Navbar";
import Shop from "./Pages/Shop/Shop";
import Login from "./Pages/Login/Login";
import { PageLayout } from "./Components/StyledComponents/PageLayout/PageLayout";

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
                        <Route path="/Jewelry" element={<PageLayout />} />
                        {/* <Route path="/Crystals" element={<PageTemplate key={} /> } />
						<Route path="/Sage" element={<PageTemplate key={} />} /> */}
                    </Routes>
                    <Footer />
                </Router>
            </div>
        </>
    );
}

export default App;
