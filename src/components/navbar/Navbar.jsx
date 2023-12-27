import React, { useState } from 'react';
import { AppBar, Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';


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

      <Box className='navBox'>
        <Typography variant="h6">
          <div className='navbarLogo'>
            <Link to='/'>
              <img className='logoNavbar' src={logo} alt="Logo"></img>
            </Link>
          </div>
        </Typography>

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
            <Typography variant="h6" sx={{ ml: 2 }}>
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
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="inherit"
          >
            <MenuIcon sx={{ color: '#FFCC6A' }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}

            sx={{
              '& .MuiPaper-root': {
                backgroundColor: 'black',
                borderBottomLeftRadius: '18px',
                borderBottomRightRadius: '18px',
                width: '99vw',
                maxWidth: '99vw',
                marginRight: '0px',
                margin: '0px',
                padding: '0px',
              }
            }}
          >
            <div className='navbarLogoContainer'>
              <MenuItem onClick={handleMenuClose} sx={{ justifyContent: 'right' }}>
                <Link to='/' className='pagesNavbar'>
                  Inicio
                </Link>
              </MenuItem>
              <Divider sx={{ borderColor: '#E4E4E4', borderWidth: 1, margin: 1, width: 80 }} />
              <MenuItem onClick={handleMenuClose} sx={{ justifyContent: 'right' }}>
                <Link to='/' className='pagesNavbar'>
                  Productos
                </Link>
              </MenuItem>
              <Divider sx={{ borderColor: '#E4E4E4', borderWidth: 1, margin: 1, width: 80 }} />
              <MenuItem onClick={handleMenuClose}>
                <Link to='/propuesta' className='pagesNavbar'>
                  Propuesta
                </Link>
              </MenuItem>
              <Divider sx={{ borderColor: '#E4E4E4', borderWidth: 1, margin: 1, width: 80 }} />
              <MenuItem onClick={handleMenuClose}>
                <Link to='/contact' className='pagesNavbar'>
                  Contactos
                </Link>
              </MenuItem>
            </div>
          </Menu>
        </Box>
      </Box>
    </AppBar >
  )
}

export default Navbar