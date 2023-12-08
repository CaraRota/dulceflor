import React from 'react'
import './navbar.scss';



//Images
import logo from '../../assets/images/logo-transparent.png'

const Navbar = () => {
    return (
        <div className='navbarContainer'>

            <div className='navbarLogo'>
                <img className='logoNavbar' src={logo}></img>
            </div>
            
            <div className='divPagesNavbar'>
            <a><p className='pagesNavbar'>Inicio</p></a>
              
                <a href='#productos-section'>
                    {/* "productos-section" o el id que corresponda */}
                        <p className='pagesNavbar'>Productos</p>
                </a>
                
                <a><p className='pagesNavbar'>Propuesta</p></a>
                <a><p className='pagesNavbar'>Contacto</p></a>
            </div>
                
        </div>
    )
}

export default Navbar