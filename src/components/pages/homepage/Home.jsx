import React, { useState } from 'react'
import SendBtn from '../../buttons/SendBtn'

//CSS
import '../../../css/Home.css'

//Images
import frascoPomelo from '../../../assets/images/frasco-pomelo.png'
import petalosAtras from '../../../assets/images/flores-atras.png'
import petalosAdelante from '../../../assets/images/flor-adelante.png'
import gajoNaranja from '../../../assets/images/gajo-naranja.png'
import rodajaNaranja from '../../../assets/images/rodaja-naranja.png'

//RRD
import { Link } from 'react-router-dom'

//Components
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'

const Home = () => {
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
        <>
            <div className='heroContainer'>
                <div className='titlesContainer'>
                    <div className='title'>
                        <h1>Conocé otra manera de regalar flores</h1>
                    </div>
                    <div className='subtitle'>
                        <p>Elegí entre nuestra variedad de únicos y exclusivos
                            <p>sabores de <span className='bold'>mermeladas</span> hechas con <span className='bold'>pétalos de flores.</span></p>
                        </p>
                    </div>
                    <div className='contactBtn'>
                        <Link to={'/contact'}><SendBtn className='sendBtn' text='Contactanos' /></Link>
                    </div>
                </div>
                <div className='imagesContainer' onMouseMove={handleMouseMove}>
                    <img className='petalosAtras' style={getDynamicStyles()} src={petalosAtras} alt='petalos de rosas atras' />
                    <img className='petalosAdelante' style={getDynamicStyles()} src={petalosAdelante} alt='petalos de rosas adelante' />
                    <img className='gajoNaranja' src={gajoNaranja} alt='gajo de naranja' />
                    <img className='rodajaNaranja' src={rodajaNaranja} alt='rodaja de naranja' />
                    <img className='frascoPomelo' src={frascoPomelo} alt='frasco de pomelo' />
                </div>
            </div>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </>
    )
}

export default Home