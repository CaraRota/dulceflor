import React, { useState } from 'react'
import '../../../css/Frasco.css'

//Images
import frascoPomelo from '../../../assets/images/frasco-pomelo.png'
import petalosAtras from '../../../assets/images/flores-atras.png'
import petalosAdelante from '../../../assets/images/flor-adelante.png'
import gajoNaranja from '../../../assets/images/gajo-naranja.png'
import rodajaNaranja from '../../../assets/images/rodaja-naranja.png'

const Frasco = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    };

    const getDynamicStyles = () => {
        const { x, y } = mousePosition;

        // Calculate the translation based on mouse position
        const translateX = x * 0.05; // Adjusted the sensitivity
        const translateY = y * 0.05; // Adjusted the sensitivity

        return {
            transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
        };
    };
    return (
        <div className='frascoContainer' onMouseMove={handleMouseMove}>
            <img className='petalosAtras' style={getDynamicStyles()} src={petalosAtras} alt='petalos de rosas atras' />
            <img className='petalosAdelante' style={getDynamicStyles()} src={petalosAdelante} alt='petalos de rosas adelante' />
            <img className='gajoNaranja' src={gajoNaranja} alt='gajo de naranja' />
            <img className='rodajaNaranja' src={rodajaNaranja} alt='rodaja de naranja' />
            <img className='frascoPomelo' src={frascoPomelo} alt='frasco de pomelo' />
        </div>
    )
}

export default Frasco