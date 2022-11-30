import React from 'react'
import './Badge.css'
import Iwha from '../Image/Iconos/Iwha.png'
import Chat from '../Image/Iconos/chat.png'

export const Badge = () => {
    return (
        <>
            <div className='badge'>
                <a href="https://wa.me/3513908626">
                    <img className='iwha' src={Iwha} alt="Enlace a Whatsapp" />
                </a>
                <img className='chat' src={Chat} alt="chatea" />
            </div>
        </>
    )
}

export default Badge