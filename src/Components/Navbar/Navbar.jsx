import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'


export const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <nav className="navbar">
            <h3 className='logo'>Dhermica</h3>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setIsMobile(false)}>
            <li>
                <NavLink exact to="/" className='inicio' activeClassName='active'>
                    Inicio
                </NavLink>
                </li>
                <li>
                <NavLink exact to="/Tratamientos" className='tratamientos' activeClassName='active'>
                    Tratamientos
                </NavLink>
                </li>
                <li>
                <NavLink exact to="/Productos" className='productos' activeClassName='active'>
                    Productos
                </NavLink>
                </li>
                <li>
                <NavLink exact to="/Contacto" className='contacto' activeClassName='active'>
                    Contacto
                </NavLink>
                </li>
            </ul>
            <button className='mobile-menu-icon'
            onClick={() => setIsMobile(!isMobile)}>|||
                {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
            </button>
        </nav>
    )
}

export default Navbar