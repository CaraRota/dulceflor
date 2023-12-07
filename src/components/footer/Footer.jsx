import React from 'react'
import SendBtn from '../buttons/SendBtn'

//CSS
import '../../css/Footer.css'

//Images
import logo from '../../assets/images/logo-transparent.png'
import instagram from '../../assets/images/ig-icon-white.png'
import facebook from '../../assets/images/fb-icon-white.png'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='social'>
                <div className='socialContainer'>
                    <img className='instagram' src={instagram}></img>
                    <img className='facebook' src={facebook}></img>
                </div>
                <div className='text'>Seguinos en nuestras redes</div>
            </div>
            <img className='logo' src={logo}></img>
            <div className='newsletter'>
                <div className='text'>¡Suscribite a nuestro newsletter!</div>
                <input className='email' type="text" placeholder="correo@mail.com"></input>
                <SendBtn text={"Enviar"} />
            </div>
        </div>
    )
}

export default Footer