import React from 'react';

//CSS
import '../../../css/WhatsAppButton.css';

//Images
import whatsappIcon from '../../../assets/images/whatsapp-icon.png';

//MUI
import { Tooltip } from '@mui/material';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send?phone=1234567890', '_blank');
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