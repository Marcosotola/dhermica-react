import React from 'react'
import './Depi.css';
import { Link } from 'react-router-dom';
import Tratamientos from '../Image/Aside/Tratamientos.png';
import Turnos from '../Image/Aside/Turnos.png';
import Llamanos from '../Image/Section/Llamanos.png';
import Productos from '../Image/Aside/productos.png';
import CardTrata from '../Cards/CardTrata';
import DataDepi from '../Cards/DataDepi';



export const Depi = () => {
  return (
    <>
      <div className='titleDepi'>
        <h1>
          Depilación
        </h1>
      </div>
      <div className='containerDepi'>
        <main className='mainDepi'>
          <CardTrata details={DataDepi} />
        </main>
        <aside className='asideDepi'>
          <Link to='/Tratamientos'>
            <img className='trata' src={Tratamientos} alt="todos los tratamientos" />
          </Link>
          <a href="https://wa.me/3513908626">
            <img className='turnos' src={Turnos} alt="" />
          </a>
          <Link to='/Productos'>
            <img className='produ' src={Productos} alt="productos" />
          </Link>

          <img className='llamanos' src={Llamanos} alt="informacion redes" />

        </aside>


      </div>
    </>
  )
}

export default Depi;