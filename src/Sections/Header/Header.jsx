import React from "react";
import Logo from './logoDhermica.png';
import './Header.css';

const Header = () => {
    return(
        <header className="Header">
            <img src={Logo} className="logoHeader" alt="logo"></img>
            <h1 className="title">Dhermica</h1>
        
        </header>
    )
}

export default Header;