
import React from 'react'
import './Productos.css';
import Turnos from '../../Components/Turnos/Turnos';
import Trata from '../../Components/Trata/Trata';
import ReactPlayer from 'react-player';
import Enlaces from '../../Components/Enlaces/Enlaces';


export const Productos = () => {
  return (
    <div className='contenedorProductos'>
      <main className='mainProductos'>
        <ReactPlayer className='player'
          url='https://youtu.be/bN5C-8F0VeM'
          width='45%'
          controls
        />
        <ReactPlayer className='player'
          url='https://youtu.be/06RxXEd8R4A'
          width='45%'
          controls
        />
        <ReactPlayer className='player'
          url='https://youtu.be/eOPMpO6T7yw'
          width='45%'
          controls
        />
        <ReactPlayer className='player'
          url='https://youtu.be/DzHeszgIjDA'
          width='45%'
          controls
        />
        <ReactPlayer className='player'
          url='https://youtu.be/VqiOt6nxyUM'
          width='45%'
          controls
        />
        <ReactPlayer className='player'
          url='https://youtu.be/fR4IVQNIsL4'
          width='45%'
          controls
        />
      </main>
      <aside className='asideProductos'>
        <Trata />
        <Turnos />
        <Enlaces />
      </aside>
    </div>
  )
}

export default Productos;