import React from 'react';

//CSS
import '../../../css/WhatsAppButton.css';

//Images
import whatsappIcon from '../../../assets/images/whatsapp-icon.png';

//MUI
import { Tooltip } from '@mui/material';

const WhatsAppButton = () => {
  const phone = '5492615877917';
  const isMobileOrTablet = window.matchMedia('(max-width: 768px)').matches;

  const handleWhatsAppClick = () => {
    //We check if the device is using a mobile or tablet to open the app or the web version if it's a desktop
    isMobileOrTablet ?
      window.open(`https://api.whatsapp.com/send?phone=${phone}`, '_blank')
      : window.open(`https://web.whatsapp.com/send?phone=${phone}`, '_blank')
  };

  return (
    <>
      <Tooltip title="Escribinos por WhatsApp!" arrow>
        <div className="whatsappIconContainer" onClick={handleWhatsAppClick}>
          <img src={whatsappIcon} alt="WhatsApp Icon" className="icon" />
        </div>
      </Tooltip>
    </>
  );
};

export default WhatsAppButton;