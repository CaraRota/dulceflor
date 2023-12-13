import React from 'react'
// import '../../css/propuesta.css'

import './Propuesta.scss'

//Images
import propuesta from '../../assets/images/foto-propuesta.png'


const Propuesta = () => {
    return (
        <div className='propuesta-title'>
            <div className='content-container'>
                <div className='text-container'>
                    <div className='title-container'>
                        <h1>
                        <span className="black-text">DE MENDOZA, CUNA DE </span>
                        <span className="purple-text">flores de calidad</span>
                        </h1>
                    </div>
                    <div className='propuesta-text'>
                        <p>El clima seco y el agua pura de montaña en Mendoza, junto con sistemas de riego controlados, son ideales para el <span>cultivo orgánico</span>. Esta combinación única, cuidada por manos expertas, produce flores excepcionales que no solo adornan, sino que también dan vida a nuestras exquisitas mermeladas.</p>

                        <p>Mendoza, reconocida por sus vinos de excelencia, es también un santuario floral. Cada pétalo narra una historia de dedicación y compromiso. Con estas flores, elaboramos artesanalmente mermeladas que capturan la <span>esencia</span> de <span className="">nuestra tierra</span>, ofreciendo una experiencia culinaria única y auténtica.</p>
                    </div>
                </div>

                <div className='image-container'>
                    <img src={propuesta} alt="Propuesta"/>
                </div>
            </div>
        </div>
    )
}

export default Propuesta