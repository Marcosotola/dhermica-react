import React from 'react'
import './ManosPies.css';
import { Link } from 'react-router-dom';
import Tratamientos from '../Image/Aside/Tratamientos.png';
import Turnos from '../Image/Aside/Turnos.png';
import Mimate from '../Image/Aside/Mimate.png';
import Regalate from '../Image/Article/Regalate.png';
import Productos from '../Image/Aside/productos.png';
import CardTrata from '../Cards/CardTrata';
import DataManosPies from '../Cards/DataManosPies';
import Enlaces from '../Enlaces/Enlaces';



export const ManosPies = () => {
    return (
        <>
            <div className='titleManos'>
                <h1>
                    Manos y Pies
                </h1>
            </div>
            <div className='containerManos'>
                <main className='mainManos'>
                    <CardTrata details={DataManosPies} />
                </main>
                <aside className='asideManos'>
                    <Link to='/Tratamientos'>
                        <img className='trata' src={Tratamientos} alt="todos los tratamientos" />
                    </Link>
                    <a href="https://wa.me/3513908626">
                        <img className='turnos' src={Turnos} alt="" />
                    </a>
                    <Link to='/Productos'>
                        <img className='produ' src={Productos} alt="productos" />
                    </Link>
                    <img className='regalate' src={Regalate} alt="dia de spa" />
                    <Enlaces />
                    <img className='mimate' src={Mimate} alt="mimate" />
                </aside>


            </div>
        </>
    )
}

export default ManosPies;