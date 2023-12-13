import React from 'react'
import SendBtn from '../ui/buttons/SendBtn'

//CSS
import '../../css/Footer.css'

//Images
import logo from '../../assets/images/logo-transparent.png'
import instagram from '../../assets/images/ig-icon-white.png'
import facebook from '../../assets/images/fb-icon-white.png'

const Footer = () => {

    const igLink = 'https://www.instagram.com/dulceflorjam/'
    const fbLink = 'https://www.facebook.com/dulceflormermeladas/'

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className='footerContainer'>
            <div className='social'>
                <div className='socialContainer'>
                    <a href={igLink} target='_blank'><img className='instagram' src={instagram}></img></a>
                    <a href={fbLink} target='_blank'><img className='facebook' src={facebook}></img></a>
                </div>
                <div className='text'>Seguinos en nuestras redes</div>
            </div>
            <a className='goTop' onClick={scrollToTop}>
                <img className='logo' src={logo}></img>
            </a>
            <div className='newsletter'>
                <div className='text'>¡Suscribite a nuestro newsletter!</div>
                <input className='email' type="text" placeholder="correo@mail.com"></input>
                <SendBtn text={"Enviar"} />
            </div>
        </div>
    )
}

export default Footer