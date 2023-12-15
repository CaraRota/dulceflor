import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import '../../css/Navbar.css'
//RRD
import { Link, useLocation } from 'react-router-dom'

//Images
import logo from '../../assets/images/logo-transparent.png'

const Navbar = () => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isMobile = window.innerWidth <= 768;


  return (
    <AppBar className="AppBar" position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar sx={{ padding: 0 }}>
        <Typography variant="h6">
          <div className='navbarLogo'>
            <Link to='/'>
              <img className='logoNavbar' src={logo} alt="Logo"></img>
            </Link>
          </div>
        </Typography>

        {(location.pathname == '/' || window.innerWidth >= 768) && (
          <Link to='/' className='pagesNavbar'>
            <Typography variant="h6">
              Inicio
            </Typography>
          </Link>
        )}

        {isMobile && (
          <React.Fragment>
            {(location.pathname === '/propuesta') && (
              <Link to='/propuesta' className='pagesNavbar'>
                <Typography variant="h6">
                  Propuesta
                </Typography>
              </Link>
            )}

            {(location.pathname === '/contact') && (
              <Link to='/contact' className='pagesNavbar'>
                <Typography variant="h6">
                  Contacto
                </Typography>
              </Link>
            )}
          </React.Fragment>
        )}

        <Box className="Box-md-flex">
          <Link to='/' className='pagesNavbar' onClick={handleMenuClose}>
            <Typography variant="h6" sx={{ ml: 2}}>
              Productos
            </Typography>
          </Link>
          <Link to='/propuesta' className='pagesNavbar'>
            <Typography variant="h6" sx={{ ml: 2 }}>
              Propuesta
            </Typography>
          </Link>
          <Link to='/contact' className='pagesNavbar'>
            <Typography variant="h6" sx={{ ml: 2 }}>
              Contactos
            </Typography>
          </Link>
        </Box>

        <Box className="IconButton-menu" >
          <IconButton
            className="IconButton-menu"
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="inherit"
          >
            <MenuIcon sx={{ color: '#FFCC6A' }}/>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ backgroundColor: 'black' }}
          >
            <MenuItem onClick={handleMenuClose} >
              <Link to='/' className='pagesNavbar'>
                Inicio
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to='/' className='pagesNavbar'>
                Productos
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to='/propuesta' className='pagesNavbar'>
                Propuesta
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to='/contact' className='pagesNavbar'>
                Contactos
              </Link>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar