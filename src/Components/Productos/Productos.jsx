
import React from 'react'
import './Productos.css';
import { Link } from 'react-router-dom'
import Turnos from '../Image/Aside/Turnos.png';
import Trata from '../Image/Aside/Tratamientos.png';
import Llamanos from '../Image/Section/Llamanos.png';
import ReactPlayer from 'react-player';


export const Productos = () => {
  return (
    <div className='contenedorProductos'>
      <main className='mainProductos'>
        <ReactPlayer className='player'
          url='https://youtu.be/bN5C-8F0VeM'
          width='45%'
          controls
        />
        <ReactPlayer className='player'
          url='https://youtu.be/06RxXEd8R4A'
          width='45%'
          controls
        />
        <ReactPlayer className='player'
          url='https://youtu.be/eOPMpO6T7yw'
          width='45%'
          controls
        />
        <ReactPlayer className='player'
          url='https://youtu.be/DzHeszgIjDA'
          width='45%'
          controls
        />
        <ReactPlayer className='player'
          url='https://youtu.be/VqiOt6nxyUM'
          width='45%'
          controls
        />
        <ReactPlayer className='player'
          url='https://youtu.be/fR4IVQNIsL4'
          width='45%'
          controls
        />
      </main>
      <aside className='asideProductos'>
        <Link to='/Tratamientos'>
          <img className='trata' src={Trata} alt="tratamientos todos" />
        </Link>
        <a href="https://wa.me/3513908626">
          <img className='turnos' src={Turnos} alt="Turnos" />
        </a>

        <img className='llamanos' src={Llamanos} alt="Llamanos" />
      </aside>
    </div>
  )
}

export default Productos;