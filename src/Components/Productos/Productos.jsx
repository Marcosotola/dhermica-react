
import React from 'react'
import './Productos.css';
import { Link } from 'react-router-dom'
import Turnos from '../Image/Aside/Turnos.png';
import Trata from '../Image/Aside/Tratamientos.png';
import Llamanos from '../Image/Section/Llamanos.png';
import Regalate from '../Image/Article/Regalate.png';
import Produc from '../Image/Productos/productos.jpeg';


export const Productos = () => {
  return (
  <div className='contenedorProductos'>
    <main className='mainProductos'>
    <img className='produc' src={Produc} alt="" />
    </main>
    <aside className='asideProductos'>
    <Link to='/Tratamientos'>
<img className='trata' src={Trata} alt="" />
</Link>
<a href="https://wa.me/3513908626">
<img className='turnos' src={Turnos} alt="" />
</a>
<img className='regalate' src={Regalate} alt="" />


<img className='llamanos' src={Llamanos} alt="" />
    </aside>
    </div>
  )
}

export default Productos;