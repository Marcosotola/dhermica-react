import React from 'react'
import './Nosotros.css'
import Trata from '../../Components/Trata/Trata'
import Turnos from '../../Components/Turnos/Turnos'
import Produ from '../../Components/Produ/Produ'
import Enlaces from '../../Components/Enlaces/Enlaces'

export const Nosotros = () => {
  return (
    <>
      <div className='containerNos'>
        <main className='mainNos'>
          <div>
            <h1 className='nuestra'>NUESTRA HISTORIA</h1>
            <hr />
          </div>
          <p className='text'>
            <strong>Dhermica</strong> comenzó en el año 2011 con el fin de lograr la apertura de un centro de estética para brindar belleza y bienestar cumpliendo a la necesidad de lo que el público busque. Está conformado por un grupo de profesionales altamente capacitado para brindar el mejor servicio con diferentes especialidades como cosmetología, estética corporal y facial, entre otras. Contamos con tecnología moderna para lograr resultados inmediatos y efectivos.
            Esta se ubica en <a href="https://www.google.com.ar/maps/place/Dhermica+Salud%2FBienestar/@-31.3468619,-64.2757468,17z/data=!3m1!4b1!4m5!3m4!1s0x94329e9df2d1ee09:0xd6f21b47ba524ac5!8m2!3d-31.3468626!4d-64.2735449" >Pablo Buitrago 6127</a> en un amplio espacio, elegante, armonioso y confortable con una excelente atención.
          </p>
          <div>
            <h1 className='quienes'>QUIENES SOMOS</h1>
            <hr />
          </div>
          <p className='text'>
            Nos consideramos auténticos, modernos, apasionados, detallistas, amables, servicial, transparentes, respetuosos y leales en nuestros compromisos. Creemos en las relaciones basadas en la confianza, procurando brindar un servicio de alta calidad profesional.
            Somos un centro de estética con profesionales altamente capacitado, con tecnología avanzada para brindar un tratamiento seguro y confiable para cada uno de nuestros pacientes que merece y requiere en su atención.
          </p>
          <div>
            <h1 className='nuestro'>NUESTRO OBJETIVO</h1>
            <hr />
          </div>
          <p className='text'>
            Brindar confianza, seguridad y respeto en cada una de nuestras prácticas, ofrecer una excelente atención y calidez en nuestros servicios.
            Realizamos investigación, acompañamiento y evaluación permanente en nuestros pacientes. Contamos con la mejor tecnología y calidad en productos para lograr un buen servicio y conformidad en una experiencia única, generando bienestar en cada uno de nuestros pacientes que buscan resaltar su belleza a nivel estético.
          </p>
        </main >
        <aside className='asideNos'>
          <Trata />
          <Turnos />
          <Produ />
          <Enlaces />
        </aside>
      </div>
    </>
  )
}

export default Nosotros