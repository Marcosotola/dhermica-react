import { ErrorResponse } from '@remix-run/router';
import React from 'react'
import { useForm } from 'react-hook-form'
import './Contacto.css'
import { Link } from 'react-router-dom';
import Tratamientos from '../Image/Aside/Tratamientos.png';
import Turnos from '../Image/Aside/Turnos.png';
import Llamanos from '../Image/Section/Llamanos.png';
import Mimate from '../Image/Aside/Mimate.png';
import Regalate from '../Image/Article/Regalate.png';
import Productos from '../Image/Aside/productos.png';


function Contacto() {

    const { register, formState: { errors }, watch, handleSubmit } = useForm("");
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <>
            <div className='contentContact'>
                <main className='mainContact'>
                    <h2>Contacto</h2>
                    <div>Nombre: {watch('nombre')}</div>

                    <form className='formContact' onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>Nombre </label>
                            <input type='text' {...register('nombre', { required: true, })} />
                            {ErrorResponse.nombre?.type === 'required' && <p>El campo es obligatorio</p>}
                            {ErrorResponse.nombre?.type === 'maxlenght' && <p>El campo es obligatorio</p>}
                        </div>
                        <div>
                            <label>Apellido </label>
                            <input type='text' {...register('apellido')} />
                        </div>
                        <div>
                            <label>Email </label>
                            <input type='text' {...register('email')} />
                        </div>
                        <div>
                            <label>Genero </label>
                            <select {...register('genero')}>
                                <option value='hombre'>Hombre</option>
                                <option value='mujer'>Mujer</option>

                            </select>
                            <input type='text' />

                        </div>
                        <input type="submit" value="Enviar"></input>
                    </form>

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