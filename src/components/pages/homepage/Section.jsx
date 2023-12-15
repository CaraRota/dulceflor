import React from 'react'

//CSS
import '../../../css/Section.css'

const Section = ({ title1, title2, text, text2, text3, image, leftSide, alt }) => {

    //Activate responsiveness for screens smaller than 900px
    window.innerWidth < 900 ? leftSide = true : null

    return (

        leftSide ? (
            <div className='sectionContainer'>
                <div className='leftSide align-start'>
                    <div className='title'>
                        {title2.length < 20 ?
                            (
                                <>
                                    <span id={title1} className='specialFontTitle'>{title1}</span>
                                    <span className='normalFontTitle'> {title2}</span>
                                </>
                            )
                            : (
                                <>
                                    <div id={title1} className='longSpecialFontTitle'>{title1}</div>
                                    <div className='longFontTitle'> {title2}</div>
                                </>
                            )
                        }
                    </div>
                    <div className='subtitle'>
                        <p className='text'>
                            {text}
                        </p>
                    </div>
                    <div className={`rectangle ${title1}`}>
                        <div className='text'>{text2}
                            <p>{text3}</p>
                        </div>
                    </div>
                </div>
                <div className='rightSide align-end'>
                    <div id={title1} className='wrapper'>
                        <img className='frascoLeft' src={image} alt={alt} />
                    </div>
                </div>
            </div>
        )
            : (
                <div className='sectionContainer'>
                    <div className='rightSide align-start'>
                        <div id={title1} className='wrapper'>
                            <img className='frasco' src={image} alt={alt} />
                        </div>
                    </div>
                    <div className='leftSideLeft align-end'>
                        <div className='title'>
                            {title2.length < 20 ?
                                (
                                    <>
                                        <span id={title1} className='specialFontTitle'>{title1}</span>
                                        <span className='normalFontTitle'> {title2}</span>
                                    </>
                                )
                                : (
                                    <>
                                        <div id={title1} className='longSpecialFontTitle'>{title1}</div>
                                        <div className='longFontTitle'> {title2}</div>
                                    </>
                                )
                            }
                        </div>
                        <div className='subtitle'>
                            <p className='text'>
                                {text}
                            </p>
                        </div>
                        <div className={`rectangle ${title1}`}>
                            <div className='text'>{text2}
                                <p>{text3}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
    )
}

export default Section