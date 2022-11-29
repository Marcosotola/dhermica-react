
import React from 'react'
import Card from '../../Components/Cards/Card';
import DataTratamientos from '../../Components/Cards/DataTratamientos';
import './Tratamientos.css';
import Turnos from '../../Components/Turnos/Turnos';
import Produ from '../../Components/Produ/Produ';
import Regalate from '../../Components/Image/Article/Regalate.png';
import Enlaces from '../../Components/Enlaces/Enlaces';
import Mimate from '../../Components/Image/Aside/Mimate.png'

export const Tratamientos = () => {
  return (
    <div className='content'>
      <main className='mainTrata'>
        <Card details={DataTratamientos} />
      </main>
      <aside className='asideTrata'>
        <Produ />
        <Turnos />
        <img className='regalate' src={Regalate} alt="dia de spa" />
        <Enlaces />
        <img className='mimate' src={Mimate} alt="mimate" />
      </aside>
    </div>
  )
}

export default Tratamientos;