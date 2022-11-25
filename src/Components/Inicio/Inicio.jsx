import React from 'react'
import './Inicio.css';
import { Link } from 'react-router-dom';
import Tratamientos from '../Image/Aside/Tratamientos.png';
import Turnos from '../Image/Aside/Turnos.png';
import Llamanos from '../Image/Section/Llamanos.png';
import Slider from '../Slider/Slider';
import Mimate from '../Image/Aside/Mimate.png';
import Regalate from '../Image/Article/Regalate.png';
import Productos from '../Image/Aside/productos.png';
import Title from './Title.png';



export const Inicio = () => {
  return (
    <div className='container'>
      <main className='main'>
        <img className='title' src={Title} alt="titulo promos" />
<Slider />
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
      
        <img className='mimate' src={Mimate} alt="" />
      </aside>
      <section className='section'>
<img className='llamanos' src={Llamanos} alt="informacion redes" />
      </section>
      <article className='article'>
        <img className='regalate' src={Regalate} alt="descripcion somos" />
      </article>

    </div>

  )
}

export default Inicio;