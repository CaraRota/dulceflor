import React from 'react'
import '../../css/navbar.css';

//RRD
import { Link } from 'react-router-dom'

//Images
import logo from '../../assets/images/logo-transparent.png'

const Navbar = () => {
    return (
        <>
            <div className='navbarContainer'>
                <div className='navbarLogo'>
                    <Link to='/'>
                        <img className='logoNavbar' src={logo}></img>
                    </Link>
                </div>
                <nav className='divPagesNavbar'>
                    <Link to='/'>
                        <p className='pagesNavbar'>Inicio</p>
                    </Link>
                    <Link to='/products'>
                        <p className='pagesNavbar'>Productos</p>
                    </Link>
                    <Link to='/propuesta'>
                        <p className='pagesNavbar'>Propuesta</p>
                    </Link>
                    <Link to='/contact'>
                        <p className='pagesNavbar'>Contacto</p>
                    </Link>
                </nav>
            </div>
        </>
    )
}

export default Navbar