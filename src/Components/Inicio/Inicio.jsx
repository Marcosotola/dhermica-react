import React from 'react'
import './Inicio.css';
import { Link } from 'react-router-dom';
import Tratamientos from '../Image/Aside/Tratamientos.png';
import Turnos from '../Image/Aside/Turnos.png';
import Carousel from '../Carousel/Carousel'
import Mimate from '../Image/Aside/Mimate.png';
import Regalate from '../Image/Article/Regalate.png';
import Productos from '../Image/Aside/productos.png';
import Title from './Title.png';
import Enlaces from '../Enlaces/Enlaces';



export const Inicio = () => {
  return (
    <div className='container'>
      <main className='main'>
        <img className='title' src={Title} alt="titulo promos" />
        <Carousel />
        
      </main>
      <aside className='aside'>
        <Link to='/Tratamientos'>
          <img className='trata' src={Tratamientos} alt="todos los tratamientos" />
        </Link>
        <a href="https://wa.me/3513908626">
          <img className='turnos' src={Turnos} alt="" />
        </a>
        <Link to='/Productos'>
          <img className='produ' src={Productos} alt="productos" />
        </Link>
        <img className='mimate' src={Mimate} alt="mimate" />
      </aside>
      <section className='section'>
<Enlaces />
      </section>
      <article className='article'>
        <img className='regalate' src={Regalate} alt="dia de spa" />
      </article>

    </div>

  )
}

export default Inicio;