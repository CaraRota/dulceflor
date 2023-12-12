import React from 'react'
import '../../../css/SendBtn.css'

const SendBtn = ({ text }) => {
    return (
        <>
            <button className='sendBtn'>{text}</button>
        </>

    )
}

export default SendBtn