
import React from 'react'
import './CardTrata.css';


const Card = (props) => {
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
                        <p className='tDuración'>
                            Duración de Sesión:
                        </p>
                        <p className='duración'>
                        {value.duración}
                        </p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Card;