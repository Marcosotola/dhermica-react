import React from 'react'
import './Depi.css';
import Trata from '../../Components/Trata/Trata';
import Turnos from '../../Components/Turnos/Turnos';
import Produ from '../../Components/Produ/Produ';
import CardTrata from '../../Components/Cards/CardTrata';
import DataDepi from '../../Components/Cards/DataDepi';
import Enlaces from '../../Components/Enlaces/Enlaces';



export const Depi = () => {
  return (
    <>
      <div className='titleDepi'>
        <h1>
          Depilación
        </h1>
      </div>
      <div className='containerDepi'>
        <main className='mainDepi'>
          <CardTrata details={DataDepi} />
        </main>
        <aside className='asideDepi'>
          <Trata />
          <Turnos />
          <Produ />
          <Enlaces />
        </aside>


      </div>
    </>
  )
}

export default Depi;