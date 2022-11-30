import React from 'react'
import './Inicio.css';
import Trata from '../../Components/Trata/Trata'
import Turnos from '../../Components/Turnos/Turnos';
import Carousel from '../../Components/Carousel/Carousel'
import Mimate from '../../Components/Image/Aside/Mimate.png';
import Regalate from '../../Components/Image/Article/Regalate.png';
import Produ from '../../Components/Produ/Produ';
import Title from './Title.png';
import Enlaces from '../../Components/Enlaces/Enlaces';

export const Inicio = () => {
  return (
    <>
      <div className='container'>
        <main className='main'>
          <img className='title' src={Title} alt="titulo promos" />
          <Carousel />
        </main>
        <aside className='aside'>
          <Trata />
          <Turnos />
          <Produ />
          <img className='mimate' src={Mimate} alt="mimate" />
        </aside>
        <section className='section'>
          <Enlaces />
        </section>
        <article className='article'>
          <img className='regalate' src={Regalate} alt="dia de spa" />
        </article>
      </div>
    </>
  )
}

export default Inicio;