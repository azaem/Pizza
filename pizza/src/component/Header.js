import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="navbar d-flex navbar-expand-lg navbar-light bg-light kol">
                <div className="container">
                    <Link to="/" className="navbar-brand">Navbar</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContact">
                        <ul className="navbar-nav mr-avto">
                            <li className="nav-item active">
                                <Link to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/contacts">Contacts</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/company">Company</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/meals">Meals</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/team">Team</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/countries">countries</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;