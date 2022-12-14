
import React from 'react'
import './Card.css';


const Card = (props) => {
    return (
        <>
            {props.details.map((value, index) => (
                <div className='card' key={index}>
                    <div className='card-image'>
                        <img src={value.img} alt='imagen del tratamiento'/>
                    </div>
                    <div>
                        <p className='card-title'>
                            {value.title}
                        </p>
                        <p className='description'>
                            {value.description}
                        </p>
                        <p className='link'>
                            <a href={value.link}>
                                Ver Mas
                            </a>
                        </p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Card;