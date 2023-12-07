import React from 'react'
import '../../css/Footer.css'

//Images
import logo from '../../assets/images/logo.png'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='social'>Pepe</div>
            <img className='logo' src={logo}></img>
            <div className='newsletter'>Pepa</div>
        </div>
    )
}

export default Footer