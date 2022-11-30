import React from 'react'
import './Nosotros.css'
import Trata from '../../Components/Trata/Trata'
import Turnos from '../../Components/Turnos/Turnos'
import Enlaces from '../../Components/Enlaces/Enlaces'

export const Nosotros = () => {
  return (
    <>
    <div className='containerNos'>
    <main className='mainNos'>

    </main >
    <aside className='asideNos'>
<Trata />
<Turnos />
<Enlaces />


    </aside>
    </div>
    </>
    
  )
}

export default Nosotros