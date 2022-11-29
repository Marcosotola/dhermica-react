import React from 'react'
import './ManosPies.css';
import Trata from '../../Components/Trata/Trata';
import Turnos from '../../Components/Turnos/Turnos';
import Mimate from '../../Components/Image/Aside/Mimate.png';
import Regalate from '../../Components/Image/Article/Regalate.png';
import Produ from '../../Components/Produ/Produ';
import CardTrata from '../../Components/Cards/CardTrata';
import DataManosPies from '../../Components/Cards/DataManosPies';
import Enlaces from '../../Components/Enlaces/Enlaces';



export const ManosPies = () => {
    return (
        <>
            <div className='titleManos'>
                <h1>
                    Manos y Pies
                </h1>
            </div>
            <div className='containerManos'>
                <main className='mainManos'>
                    <CardTrata details={DataManosPies} />
                </main>
                <aside className='asideManos'>
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

export default ManosPies;