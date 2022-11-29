import React from 'react'
import './Corpo.css';
import Trata from '../../Components/Trata/Trata';
import Turnos from '../../Components/Turnos/Turnos';
import Produ from '../../Components/Produ/Produ';
import CardTrata from '../../Components/Cards/CardTrata';
import DataCorpo from '../../Components/Cards/DataCorpo';
import Enlaces from '../../Components/Enlaces/Enlaces';


export const Corpo = () => {
  return (
    <>
      <div className='titleCorpo'>
        <h1>
          Corporales
        </h1>
      </div>
      <div className='containerCorpo'>
        <main className='mainCorpo'>
          <CardTrata details={DataCorpo} />
        </main>
        <aside className='asideCorpo'>
          <Trata />
          <Turnos />
          <Produ />
          <Enlaces />
        </aside>
      </div>
    </>
  )
}

export default Corpo;