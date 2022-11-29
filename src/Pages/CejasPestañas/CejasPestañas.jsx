import React from 'react'
import './CejasPestañas.css';
import Trata from '../../Components/Trata/Trata';
import Turnos from '../../Components/Turnos/Turnos';
import Regalate from '../../Components/Image/Article/Regalate.png';
import Produ from '../../Components/Produ/Produ';
import CardTrata from '../../Components/Cards/CardTrata';
import DataCejasPestañas from '../../Components/Cards/DataCejasPestañas';
import Enlaces from '../../Components/Enlaces/Enlaces';

export const CejasPestañas = () => {
  return (
    <>
      <div className='titleCejas'>
        <h1>
          Cejas y Pestañas
        </h1>
      </div>
      <div className='containerCejas'>
        <main className='mainCejas'>
          <CardTrata details={DataCejasPestañas} />
        </main>
        <aside className='asideCejas'>
          <Trata />
          <Turnos />
          <Produ />
          <img className='regalate' src={Regalate} alt="dia de spa" />
          <Enlaces />
        </aside>
      </div>
    </>
  )
}

export default CejasPestañas;