import React, { useEffect, useState } from 'react'
import SendBtn from '../../ui/buttons/SendBtn'

//CSS
import '../../../css/Home.css'
import 'animate.css';

//Images for sections
import frascoPomelo from '../../../assets/images/frasco-pomelo.png'
import frascoPera from '../../../assets/images/frasco-pera.png'
import frascoFrutilla from '../../../assets/images/frasco-frutilla.png'
import frascoMandarina from '../../../assets/images/frasco-mandarina.png'
import frascoFrambuesa from '../../../assets/images/frasco-frambuesa.png'

//RRD
import { Link } from 'react-router-dom'

//Components
import Section from './Section'
import Frasco from '../../ui/frasco/Frasco'

const Home = () => {

    const [isAnimated, setIsAnimated] = useState(false);
    const [isAnimated2, setIsAnimated2] = useState(false);
    const [isAnimated3, setIsAnimated3] = useState(false);
    const [isAnimated4, setIsAnimated4] = useState(false);
    const [isAnimated5, setIsAnimated5] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = 100;

            const element1 = document.querySelector('.section1');
            if (element1 && window.scrollY + window.innerHeight >= element1.offsetTop + offset) {
                setIsAnimated(true);
            }

            const element2 = document.querySelector('.section2');
            if (element2 && window.scrollY + window.innerHeight >= element2.offsetTop + offset) {
                setIsAnimated2(true);
            }

            const element3 = document.querySelector('.section3');
            if (element3 && window.scrollY + window.innerHeight >= element3.offsetTop + offset) {
                setIsAnimated3(true);
            }

            const element4 = document.querySelector('.section4');
            if (element4 && window.scrollY + window.innerHeight >= element4.offsetTop + offset) {
                setIsAnimated4(true);
            }

            const element5 = document.querySelector('.section5');
            if (element5 && window.scrollY + window.innerHeight >= element5.offsetTop + offset) {
                setIsAnimated5(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='heroContainer'>
                <div className='titlesContainer animate__animated animate__fadeInUp'>
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
                <Frasco />
            </div>
            <div className='section1'></div>
            {
                isAnimated &&
                <>
                    <div className='animate__animated animate__fadeInLeft'>
                        <Section
                            title1='Pomelo'
                            title2='con rosas'
                            text='Equilibrio entre la intensidad cítrica del pomelo con la suavidad floral de los pétalos de rosas.'
                            text2='Experimentá una combinación excepcional al untar esta mermelada en tostadas de pan integral con queso brie.'
                            text3='El contraste de sabores crea una experiencia única.'
                            image={frascoPomelo}
                            leftSide={true}
                            alt='frasco de pomelo'

                        />
                    </div>
                    <div className='section2'></div>
                </>
            }
            {
                isAnimated2 &&
                <>
                    <div className='animate__animated animate__fadeInRight'>
                        <Section
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
                    </div>
                    <div className='section3'></div>
                </>
            }
            {
                isAnimated3 &&
                <>
                    <div className='animate__animated animate__fadeInLeft'>
                        <Section
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
                    </div>
                    <div className='section4'></div>
                </>
            }
            {
                isAnimated4 &&
                <>
                    <div className='animate__animated animate__fadeInRight'>
                        <Section
                            title1='Mandarina'
                            title2='con azafrán'
                            text='Adecuado balance entre la vibrante frescura de la mandarina y la exquisita calidez del azafrán.'
                            text2={null}
                            text3='Dale un toque gourmet a tu desayuno combinando esta mermelada con pan de centeno y queso en feta.'
                            image={frascoMandarina}
                            leftSide={false}
                            alt='frasco de mandarina'
                        />
                    </div>
                    <div className='section5'></div>
                </>
            }
            {
                isAnimated5 &&
                <>
                    <div className='animate__animated animate__fadeInLeft'>
                        <Section
                            title1='Frambuesa'
                            title2='y champagne con rosas'
                            text='Justa combinación entre la acidez de la frambuesa, las burbujas refinadas del champagne y la presencia de los pétalos de rosas.'
                            text2={null}
                            text3='Dale un toque gourmet a tu desayuno combinando esta mermelada con pan de centeno y queso en feta.'
                            image={frascoFrambuesa}
                            leftSide={true}
                            alt='frasco de frambuesa'
                        />
                    </div>
                    <div className='section6'></div>
                </>
            }
        </>
    )
}

export default Home