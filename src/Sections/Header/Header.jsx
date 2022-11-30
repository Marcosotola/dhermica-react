import React from "react";
import Logo from './logoDhermica.png';
import './Header.css';

const Header = () => {
    return (
        <header className="Header">
            
            <a href="./nosotros">
                <img src={Logo} className="logoHeader" alt="logo"></img>
                </a>
                <div>
                <a href="./nosotros">
                <h1 className="title">Dhermica</h1>
            </a>
            </div>
        </header>
    )
}

export default Header;