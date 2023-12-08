import React from 'react'
import './navbar.scss';



//Images
import logoNavbar from '../../assets/images/logoNavbar.png'

const Navbar = () => {
    return (
        <div className='navbarContainer'>

            <div className='navbarLogo'>
                <img className='logoNavbar' src={logoNavbar}></img>
            </div>
            
            <div className='divPagesNavbar'>
                <p className='pagesNavbar'>Inicio</p>
                <p className='pagesNavbar'>Productos</p>
                <p className='pagesNavbar'>Propuesta</p>
                <p className='pagesNavbar'>Contacto</p>
            </div>
                
        </div>
    )
}

export default Navbar