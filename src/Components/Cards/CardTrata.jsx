
import React from 'react'
import './CardTrata.css';


const CardTrata = (props) => {
    return (
        <>
            {props.details.map((value, index) => (
                <div className='cardTrata' key={index}>
                    <div className='cardTrata-image'>
                        <img src={value.img} alt='imagen del tratamiento' />
                    </div>
                    <div>
                        <p className='cardTrata-title'>
                            {value.title}
                        </p>
                        <p className='descriptionTrata'>
                            {value.description}
                        </p>
                        <p className='tDuracion'>
                            Duración de Sesión:
                        </p>
                        <p className='duracion'>
                        {value.duracion}
                        </p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CardTrata;