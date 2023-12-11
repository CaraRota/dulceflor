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

//Images for sections
import frascoPera from '../../../assets/images/frasco-pera.png'
import frascoFrutilla from '../../../assets/images/frasco-frutilla.png'
import frascoMandarina from '../../../assets/images/frasco-mandarina.png'
import frascoFrambuesa from '../../../assets/images/frasco-frambuesa.png'

//RRD
import { Link } from 'react-router-dom'

//Components
import Section1 from './Section1'

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
                        <p>
                            Elegí entre nuestra variedad de únicos y exclusivos
                        </p>
                        <p>sabores de <span className='bold'>mermeladas</span> hechas con <span className='bold'>pétalos de flores.</span></p>
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
            <Section1
                title1='Pomelo'
                title2='con rosas'
                text='Equilibrio entre la intensidad cítrica del pomelo con la suavidad floral de los pétalos de rosas.'
                text2='Experimentá una combinación excepcional al untar esta mermelada en tostadas de pan integral con queso brie.'
                text3='El contraste de sabores crea una experiencia única.'
                image={frascoPomelo}
                leftSide={true}
                alt='frasco de pomelo'

            />
            <Section1
                title1='Pera'
                title2='con jazmín'
                text='Ideal fusión entre la jugosa dulzura de la pera con la sutil fragancia del Jazmín.'
                text2={null}
                text3='Usá esta mermelada para acompañar un rico té de jazmín y alguna preparación con masa madre (ya que su acidez 
                    equilibra los sabores).                    '
                image={frascoPera}
                leftSide={false}
                alt='frasco de pera'
            />
            <Section1
                title1='Frutilla'
                title2='con rosas'
                text='Perfecta armonía entre la frescura de las frutillas y la delicadeza floral de los pétalos de rosas.'
                text2={null}
                text3='Saboreá una tarta de chocolate amargo, rellena con mermelada de fresas y rosas, cubierta con virutas de chocolate y
                decorada con pétalos.'
                image={frascoFrutilla}
                leftSide={true}
                alt='frasco de frutilla'
            />
            <Section1
                title1='Mandarina'
                title2='con azafrán'
                text='Adecuado balance entre la vibrante frescura de la mandarina y la exquisita calidez del azafrán.'
                text2={null}
                text3='Dale un toque gourmet a tu desayuno combinando esta mermelada con pan de centeno y queso en feta.'
                image={frascoMandarina}
                leftSide={false}
                alt='frasco de mandarina'
            />
            <Section1
                title1='Frambuesa'
                title2='y champagne con rosas'
                text='Justa combinación entre la acidez de la frambuesa, las burbujas refinadas del champagne y la presencia de los pétalos de rosas.'
                text2={null}
                text3='Dale un toque gourmet a tu desayuno combinando esta mermelada con pan de centeno y queso en feta.'
                image={frascoFrambuesa}
                leftSide={true}
                alt='frasco de frambuesa'
            />
        </>
    )
}

export default Home