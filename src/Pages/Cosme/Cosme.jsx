import React from 'react'
import './Cosme.css';
import Trata from '../../Components/Trata/Trata';
import Turnos from '../../Components/Turnos/Turnos';
import Mimate from '../../Components/Image/Aside/Mimate.png';
import Regalate from '../../Components/Image/Article/Regalate.png';
import Produ from '../../Components/Produ/Produ';
import CardTrata from '../../Components/Cards/CardTrata';
import DataCosme from '../../Components/Cards/DataCosme';
import Enlaces from '../../Components/Enlaces/Enlaces';



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
          <Trata />
          <Turnos />
          <Produ />
          <img className='regalate' src={Regalate} alt="dia de spa" />
          <Enlaces />
          <img className='mimate' src={Mimate} alt="mimate" />
        </aside>


      </div>
    </>
  )
}

export default Cosme;
