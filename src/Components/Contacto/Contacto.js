import { ErrorResponse } from '@remix-run/router';
import React from 'react'
import { useForm } from 'react-hook-form'
import './Contacto.css'

 function Contacto() {

    const { register, formState:{errors}, watch, handleSubmit } = useForm("");
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <>
            <h2>Contacto</h2>
            <div>Nombre: {watch ('nombre')}</div> 

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nombre</label>
                    <input type='text' {...register('nombre', { required:true, })} />
                    {ErrorResponse.nombre?.type === 'required' && <p>El campo es obligatorio</p>}
                    {ErrorResponse.nombre?.type === 'maxlenght' && <p>El campo es obligatorio</p>}
                </div>
                <div>
                    <label>Apellido</label>
                    <input type='text' {...register('apellido')} />
                </div>
                <div>
                    <label>Email</label>
                    <input type='text' {...register('email')} />
                </div>
                <div>
                    <label>Genero</label>
                    <select {...register('genero')}>
                    <option value='hombre'>Hombre</option>
                    <option value='mujer'>Mujer</option>

                    </select>
                    <input type='text' />

                </div>
                <input type="submit" value="Enviar"></input>
            </form>


        </>









    );
}

export default Contacto