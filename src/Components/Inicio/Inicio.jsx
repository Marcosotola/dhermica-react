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
import Face from '../Image/Enlaces/face.png';
import Insta from '../Image/Enlaces/insta.png';
import Ubi from '../Image/Enlaces/ubi.png';
import Wha from '../Image/Enlaces/wha.png';



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
        <a href='https://www.facebook.com/espaciodhermica/'>
          <img className='face' src={Face} alt="link face" />
        </a>
        <a href='https://www.instagram.com/dhermica.cor/'>
          <img className='insta' src={Insta} alt="link Insta" />
        </a>
        <a href='X5021DEC, Pablo Buitrago 6127, X5021DEC Córdoba'>
          <img className='ubi' src={Ubi} alt="link ubicación" />
        </a>
        <a href='https://wa.me/3513908626'>
          <img className='wha' src={Wha} alt="link Whatsapp" />
        </a>
        <img className='mimate' src={Mimate} alt="mimate" />
      </aside>
      <section className='section'>
        <img className='llamanos' src={Llamanos} alt="informacion redes" />
      </section>
      <article className='article'>
        <img className='regalate' src={Regalate} alt="dia de spa" />
      </article>

    </div>

  )
}

export default Inicio;