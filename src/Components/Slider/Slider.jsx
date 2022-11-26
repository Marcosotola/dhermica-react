import React from 'react';
import './Slider.css';
import Promo1 from './promoDepi.png';
import Promo2 from './promoFacial.png';
import Promo3 from './promoManiPedi.png';


export const Slider = () => {
  return (
    <div className='slider'>
      <ul>
        <li>
          <img src={Promo1} alt='promo 1'></img>
        </li>
        <li>
          <img src={Promo2} alt='promo 2'></img>
        </li>
        <li>
          <img src={Promo3} alt='promo 3'></img>
        </li>
        <li>
          <img src={Promo3} alt='promo 3'></img>
        </li>
      </ul>
    </div>
  )
}

export default Slider
