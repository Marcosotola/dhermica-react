import React from 'react'
import './Produ.css'
import { Link } from 'react-router-dom'
import Productos from '../Image/Aside/productos.png'

export const Produ = () => {
    return (
        <>
            <Link to='/Productos'>
                <img className='produ' src={Productos} alt="productos" />
            </Link>
        </>
    )
}

export default Produ