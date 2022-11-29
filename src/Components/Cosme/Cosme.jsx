import React from 'react'
import './Cosme.css';
import { Link } from 'react-router-dom';
import Tratamientos from '../Image/Aside/Tratamientos.png';
import Turnos from '../Image/Aside/Turnos.png';
import Mimate from '../Image/Aside/Mimate.png';
import Regalate from '../Image/Article/Regalate.png';
import Productos from '../Image/Aside/productos.png';
import CardTrata from '../Cards/CardTrata';
import DataCosme from '../Cards/DataCosme';
import Enlaces from '../Enlaces/Enlaces';



export const Cosme = () => {
  return (
    <>
      <div className='titleCosme'>
        <h1>
          Faciales
        </h1>
      </div>
      <div className='containerCosme'>
        <main className='mainCosme'>
          <CardTrata details={DataCosme} />
        </main>
        <aside className='asideCosme'>
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

export default Cosme;
