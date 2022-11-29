
import React from 'react'
import './Contacto.css'
import Trata from '../../Components/Trata/Trata';
import Turnos from '../../Components/Turnos/Turnos';
import Form from '../../Components/Form/Form';
import Enlaces from '../../Components/Enlaces/Enlaces';

export const Contacto = () => {
    return (
        <>
            <div className='contentContact'>
                <main className='mainContact'>
                    <h1>Contacto</h1>
                    <Form />
                </main>
                <aside className='asideContact'>
                    <Trata />
                    <Turnos />
                    <Enlaces />
                </aside>
            </div>
        </>
    );
}

export default Contacto