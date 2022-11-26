import { ErrorResponse } from '@remix-run/router';
import React from 'react'
import { useForm } from 'react-hook-form'
import './Contacto.css'
import { Link } from 'react-router-dom';
import Tratamientos from '../Image/Aside/Tratamientos.png';
import Turnos from '../Image/Aside/Turnos.png';
import Llamanos from '../Image/Section/Llamanos.png';
import Productos from '../Image/Aside/productos.png';
import Form from '../Form/Form';


function Contacto() {

    const { register, formState: { errors }, watch, handleSubmit } = useForm("");
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <>
            <div className='contentContact'>
                <main className='mainContact'>
                    <h1>Contacto</h1>

                    <Form />
                </main>
                <aside className='asideContact'>
                    <Link to='/Tratamientos'>
                        <img className='trata' src={Tratamientos} alt="todos los tratamientos" />
                    </Link>
                    <a href="https://wa.me/3513908626">
                        <img className='turnos' src={Turnos} alt="" />
                    </a>
                    <Link to='/Productos'>
                        <img className='produ' src={Productos} alt="productos" />
                    </Link>

                    <img className='llamanos' src={Llamanos} alt="" />
                </aside>
            </div>
            
        </>









    );
}

export default Contacto