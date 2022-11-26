import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Form.css';



function ContactForm() {
    const [state, handleSubmit] = useForm("xvoynbyr");
    if (state.succeeded) {
        return <p>Gracias por contactarnos, en breve nos comunicaremos con vos!</p>;
    }
    return (
        <form className='formContact' onSubmit={handleSubmit}>



            <label htmlFor="nombre">
                Nombre
            </label>
            <input
                id="nombre"
                type="text"
                name="nombre"
            />
            <ValidationError
                prefix="Nombre"
                field="nombre"
                errors={state.errors}
            />
             <label htmlFor="nombre">
                Apellido
            </label>
            <input
                id="apellido"
                type="text"
                name="apellido"
            />
            <ValidationError
                prefix="Apellido"
                field="Apellido"
                errors={state.errors}
            />
            <label htmlFor="email">
                Email Address
            </label>
            <input
                id="email"
                type="email"
                name="email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
             <label htmlFor="mensaje">
                Mensaje
            </label>
            <textarea
                id="message"
                name="message"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Enviar
            </button>
        </form>
    );
}
function App() {
    return (
        <ContactForm />
    );
}
export default App;