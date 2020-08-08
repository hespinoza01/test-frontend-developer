import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.scss';

// Import Components
import SearchBox from "../searchBox/SearchBox";
import logo from "../../logo.svg";


// Navigation bar or header of the App
function Navbar() {
    return (
        <header className='Navbar'>
            <Link className='Navbar-logo' to="/">
                <img src={logo} alt="app-logo"/>
                <h1>github user searcher</h1>
            </Link>
            <SearchBox/>
        </header>
    );
}

export default Navbar;
