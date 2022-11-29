import React from 'react'
import Face from '../Image/Enlaces/face.png'
import Insta from '../Image/Enlaces/insta.png'
import Ubi from '../Image/Enlaces/ubi.png'



export const Enlaces = () => {
  return (
    <>
    <a href='https://www.facebook.com/espaciodhermica/'>
    <img className='face' src={Face} alt="link face" />
  </a>
  <a href='https://www.instagram.com/dhermica.cor/'>
    <img className='insta' src={Insta} alt="link Insta" />
  </a>
  <a href='https://www.google.com.ar/maps/place/Dhermica+Salud%2FBienestar/@-31.3468619,-64.2757468,17z/data=!3m1!4b1!4m5!3m4!1s0x94329e9df2d1ee09:0xd6f21b47ba524ac5!8m2!3d-31.3468626!4d-64.2735449'>
    <img className='ubi' src={Ubi} alt="link ubicación" />
  </a>
  </>
  )
}
export default Enlaces