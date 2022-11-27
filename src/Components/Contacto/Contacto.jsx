
import React from 'react'
import './Contacto.css'
import { Link } from 'react-router-dom';
import Tratamientos from '../Image/Aside/Tratamientos.png';
import Turnos from '../Image/Aside/Turnos.png';
import Llamanos from '../Image/Section/Llamanos.png';
import Productos from '../Image/Aside/productos.png';
import Form from '../Form/Form';


export const Contacto = () => {
    return (

        <>
            <div className='contentContact'>
                <main className='mainContact'>
                    <h1>Contacto</h1>

                    <Form />
                </main>
                <aside className='asideContact'>
                    <Link to='/Tratamientos'>
                        <img className='trata' src={Tratamientos} alt="todos los tratamientos" />
                    </Link>
                    <a href="https://wa.me/3513908626">
                        <img className='turnos' src={Turnos} alt="Turnos" />
                    </a>
                    <Link to='/Productos'>
                        <img className='produ' src={Productos} alt="productos" />
                    </Link>

                    <img className='llamanos' src={Llamanos} alt="donde ubicar" />
                </aside>
            </div>

        </>









    );
}

export default Contacto