import React from 'react'
import './Trata.css'
import Tratamientos from '../Image/Aside/Tratamientos.png';
import { Link } from 'react-router-dom';


export const Trata = () => {
    return (
        <>
            <Link to='/Tratamientos'>
                <img className='trata' src={Tratamientos} alt="todos los tratamientos" />
            </Link>
        </>
    )
}

export default Trata