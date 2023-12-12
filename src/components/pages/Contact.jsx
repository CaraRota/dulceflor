import React from 'react'

//Components
import Frasco from '../ui/frasco/Frasco'
import SendBtn from '../ui/buttons/SendBtn'

//CSS
import '../../css/Contact.css'

//RHF
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div className='contactContainer'>
            <div className='leftSide'>
                <div className='title'>
                    Contáctanos
                </div>
                <div className='subtitle'>
                    <p>¿Tenes preguntas o comentarios? ¡Estamos para ayudarte!</p>
                    <p>Rellená el formulario de contacto y nos comunicaremos a la brevedad.</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='labelContainer'>
                        <label>Ingresá tu nombre</label>
                    </div>
                    <input type="text" placeholder="Nombre" {...register("Nombre", { required: true, maxLength: 80 })} />
                    <div className='labelContainer'>
                        <label>Ingresá tu número celular</label>
                    </div>
                    <input type="tel" placeholder="Número celular" {...register("Celular", { required: true })} />
                    <div className='labelContainer'>
                        <label>Ingresá tu correo electrónico</label>
                    </div>
                    <input type="text" placeholder="Correo electrónico" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                    <div className='labelContainer'>
                        <label>Ingresá tu mensaje</label>
                    </div>
                    <textarea placeholder='Mensaje' {...register("Mensaje", { required: true })} />
                    <SendBtn type="submit" text={'Enviar'} />
                </form>
            </div>
            <div className='rightSide'>
                <div className='frascoContainer'>
                    <Frasco />
                </div>
            </div>
        </div>
    )
}

export default Contact