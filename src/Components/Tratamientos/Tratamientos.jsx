
import React from 'react'
import Card from '../Cards/Card';
import DataTratamientos from '../Cards/DataTratamientos';
import './Tratamientos.css';
import { Link } from 'react-router-dom'
import Turnos from '../Image/Aside/Turnos.png';
import Produ from '../Image/Aside/productos.png';
import Regalate from '../Image/Article/Regalate.png';
import Enlaces from '../Enlaces/Enlaces';



export const Tratamientos = () => {
  return (
    <div className='content'>
      <main className='mainTrata'>
        <Card details={DataTratamientos} />
      </main>
      <aside className='asideTrata'>
        <img className='regalate' src={Regalate} alt="" />
        <a href="https://wa.me/3513908626">
          <img className='turnos' src={Turnos} alt="" />
        </a>
        <Link to='/Productos'>
          <img className='produ' src={Produ} alt="" />
        </Link>
<Enlaces />
      </aside>
    </div>
  )
}

export default Tratamientos;