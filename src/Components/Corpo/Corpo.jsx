import React from 'react'
import './Corpo.css';
import { Link } from 'react-router-dom';
import Tratamientos from '../Image/Aside/Tratamientos.png';
import Turnos from '../Image/Aside/Turnos.png';
import Productos from '../Image/Aside/productos.png';
import CardTrata from '../Cards/CardTrata';
import DataCorpo from '../Cards/DataCorpo';
import Enlaces from '../Enlaces/Enlaces';


export const Corpo = () => {
  return (
    <>
      <div className='titleCorpo'>
        <h1>
          Corporales
        </h1>
      </div>
      <div className='containerCorpo'>
        <main className='mainCorpo'>
          <CardTrata details={DataCorpo} />
        </main>
        <aside className='asideCorpo'>
          <Link to='/Tratamientos'>
            <img className='trata' src={Tratamientos} alt="todos los tratamientos" />
          </Link>
          <a href="https://wa.me/3513908626">
            <img className='turnos' src={Turnos} alt="" />
          </a>
          <Link to='/Productos'>
            <img className='produ' src={Productos} alt="productos" />
        <Enlaces />
          </Link>
        </aside>


      </div>
    </>
  )
}

export default Corpo;