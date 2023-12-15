import React from 'react'
import '../../../css/Frasco.css'
import 'animate.css';


//Images
import frascoPomelo from '../../../assets/images/frasco-pomelo.png'
import petalosAtras from '../../../assets/images/flores-atras.png'
import petalosAdelante from '../../../assets/images/flor-adelante.png'
import gajoNaranja from '../../../assets/images/gajo-naranja.png'
import rodajaNaranja from '../../../assets/images/rodaja-naranja.png'

const Frasco = () => {

    return (
        <div className='frascoContainer' >
            <img className='petalosAtras' src={petalosAtras} alt='petalos de rosas atras' />
            <img className='petalosAdelante' src={petalosAdelante} alt='petalos de rosas adelante' />
            <img className='gajoNaranja' src={gajoNaranja} alt='gajo de naranja' />
            <img className='rodajaNaranja' src={rodajaNaranja} alt='rodaja de naranja' />
            <img className='animate__animated animate__pulse frascoPomelo' src={frascoPomelo} alt='frasco de pomelo' />
        </div>
    )
}

export default Frasco