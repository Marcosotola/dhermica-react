import React from 'react'
import './CejasPestañas.css';
import { Link } from 'react-router-dom';
import Tratamientos from '../Image/Aside/Tratamientos.png';
import Turnos from '../Image/Aside/Turnos.png';
import Llamanos from '../Image/Section/Llamanos.png';
import Mimate from '../Image/Aside/Mimate.png';
import Regalate from '../Image/Article/Regalate.png';
import Productos from '../Image/Aside/productos.png';
import CardTrata from '../Cards/CardTrata';
import DataCejasPestañas from '../Cards/DataCejasPestañas';



export const CejasPestañas = () => {
  return (
    <>
    <div className='titleCejas'>
      <h1>
        Cejas y Pestañas
      </h1>
    </div>
      <div className='containerCejas'>
        <main className='mainCejas'>
          <CardTrata details={DataCejasPestañas} />
        </main>
        <aside className='asideCejas'>
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
          <img className='llamanos' src={Llamanos} alt="informacion redes" />
          <img className='mimate' src={Mimate} alt="mimate" />
        </aside>


      </div>
    </>
  )
}

export default CejasPestañas;