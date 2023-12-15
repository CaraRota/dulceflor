import React from 'react'
import '../../../css/SendBtn.css'

//MUI
import { CircularProgress } from '@mui/material';

const SendBtn = ({ text }) => {
    return (
        <>
            <button className='sendBtn'>
                {text === "Enviando..." ? <CircularProgress size={18} color="inherit" /> : text}
            </button>
        </>

    )
}

export default SendBtn