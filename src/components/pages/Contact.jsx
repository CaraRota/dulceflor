import React, { useState } from 'react'

//Components
import Frasco from '../ui/frasco/Frasco'
import SendBtn from '../ui/buttons/SendBtn'

//Config
import { configEmailJS } from '../../config/config.js'

//EmailJS
import emailjs from '@emailjs/browser';

//CSS
import '../../css/Contact.css'

//RHF
import { useForm } from 'react-hook-form';

//MUI
import { Alert } from '@mui/material';

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formSubmitted, setFormSubmitted] = useState("");

    const onSubmit = async (data, e) => {
        setIsLoading(true);
        e.preventDefault();

        const { Nombre, Celular, Email, Mensaje } = data;

        const templateParams = {
            to_name: 'Dulce Flor',
            from_name: Nombre.trim(),
            phone: Celular.trim(),
            email: Email.trim(),
            message: Mensaje.trim(),
            reply_to: Email.trim()
        };

        try {
            const result = await emailjs.send(configEmailJS.serviceID, configEmailJS.templateID, templateParams, configEmailJS.userID);
            console.log(result.text);
            setFormSubmitted("success")
        } catch (error) {
            console.error(error.text);
            setFormSubmitted("error")
            setIsLoading(false);
        } finally {
            setIsLoading(false);
            e.target.reset();
        }
    };

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
                    {errors.Nombre?.type === "required" &&
                        <span className='error'>El nombre es requerido</span>
                    }
                    {errors.Nombre?.type === "pattern" &&
                        <span className='error'>El nombre debe contener caracteres válidos</span>
                    }
                    {errors.Nombre?.type === "maxLength" &&
                        <span className='error'>El nombre no puede tener más de 80 caracteres</span>
                    }
                    <input type="text" placeholder="Nombre" {...register("Nombre",
                        {
                            required: true,
                            maxLength: 80,
                            pattern: /^[A-Za-z\s]+$/i
                        })} />
                    <div className='labelContainer'>
                        <label>Ingresá tu número celular</label>
                    </div>
                    {errors.Celular?.type === "required" &&
                        <span className='error'>El número celular es requerido</span>
                    }
                    {errors.Celular?.type === "pattern" &&
                        <span className='error'>El número celular sólo puede contener números</span>
                    }
                    {(
                        errors.Celular?.type === "minLength" ||
                        errors.Celular?.type === "maxLength"
                    ) && (
                            <span className='error'>El número celular debe tener entre 8 y 12 caracteres</span>
                        )}
                    <input type="tel" placeholder="Número celular" {...register("Celular",
                        {
                            required: true,
                            minLength: 8,
                            maxLength: 12,
                            pattern: /^[0-9]+$/i
                        })} />
                    <div className='labelContainer'>
                        <label>Ingresá tu correo electrónico</label>
                    </div>
                    {errors.Email?.type === "required" &&
                        <span className='error'>El correo electrónico es requerido</span>
                    }
                    {errors.Email?.type === "pattern" &&
                        <span className='error'>El correo electrónico debe ser válido</span>
                    }
                    {errors.Email?.type === "maxLength" &&
                        <span className='error'>El correo electrónico no puede tener más de 80 caracteres</span>
                    }
                    <input type="text" placeholder="Correo electrónico" {...register("Email",
                        {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                            maxLength: 80
                        })} />
                    <div className='labelContainer'>
                        <label>Ingresá tu mensaje</label>
                    </div>
                    {errors.Mensaje?.type === "required" &&
                        <span className='error'>El mensaje es requerido</span>
                    }
                    {(errors.Mensaje?.type === "maxLength" ||
                        errors.Mensaje?.type === "minLength"
                    ) && (
                            <span className='error'>El mensaje debe contener entre 10 y 500 caracteres</span>
                        )
                    }
                    <textarea placeholder='Mensaje' {...register("Mensaje", {
                        required: true,
                        maxLength: 500,
                        minLength: 10,
                    })} />
                    {
                        !isLoading ? (
                            <SendBtn type="submit" text={'Enviar'} />
                        ) : (
                            <SendBtn disabled={isLoading} text={'Enviando...'} />
                        )
                    }
                    {
                        formSubmitted === "success" && (
                            <Alert severity="success" variant="outlined">
                                <p>¡Gracias por tu mensaje!</p>
                                <p>En breve nos pondremos en contacto.</p>
                            </Alert>
                        )
                    }
                    {
                        formSubmitted === "error" && (
                            <Alert severity="error" variant="outlined">
                                <p>¡Hubo un error al enviar tu mensaje!</p>
                                <p>Por favor, intentá nuevamente más tarde.</p>
                            </Alert>
                        )
                    }
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