
import { BrowserRouter, Link } from "react-router-dom";
import logo from "../assests-images/assets/logo_main-48JSqkPZ.png"


const Navbar = () => {
    return (
        <>
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg  Nav-main">
                <div className="container align-items-end">
                    <a className="logo" href="#">
                        <img src={logo} className="img-fluid" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" 
                                data-aos="fade-down"
                                data-aos-duration="600"
                                data-aos-easing='ease-in-out' href="/hero">Home</a>
                            </li>
                           
                            <li className="nav-item">
                                <a 
                                className="nav-link"
                                    data-aos="fade-down"
                                    data-aos-duration="800"
                                    data-aos-easing='ease-in-out' href="#">Programs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                    data-aos="fade-down"
                                    data-aos-duration="1000"
                                    data-aos-easing='ease-in-out' href="/trainers">Trainers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" 
                                data-aos="fade-down"
                                data-aos-duration="1200"
                                data-aos-easing='ease-in-out'href="/plans">Membership</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                data-aos="fade-down"
                                data-aos-duration="1400"
                                data-aos-easing='ease-in-out' href="/reviews">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                    data-aos="fade-down"
                                    data-aos-duration="1600"
                                    data-aos-easing='ease-in-out' href="/contact">Contact Us</a>
                            </li>

                        </ul>
                        <form className="d-flex ms-md4" role="search">
                            <button
                                className="btn1" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                data-aos="fade-left"
                                data-aos-duration="1800"
                                data-aos-easing='ease-in-out'>
                                Sign Up
                            </button>
                        </form>

                    </div>
                </div>
            </nav>
            </BrowserRouter>
        </>



    );
};

export default Navbar;
