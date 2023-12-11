import React from 'react'

//CSS
import '../../../css/Section.css'

const Section = ({ title1, title2, text, text2, text3, image, leftSide, alt }) => {

    return (

        leftSide ? (
            <div className='sectionContainer'>
                <div className='leftSide'>
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
                <div className='rightSide'>
                    <div id={title1} className='wrapper'>
                        <img className='frascoLeft' src={image} alt={alt} />
                    </div>
                </div>
            </div>
        )
            : (
                <div className='sectionContainer'>
                    <div className='rightSide'>
                        <div id={title1} className='wrapper'>
                            <img className='frasco' src={image} alt={alt} />
                        </div>
                    </div>
                    <div className='leftSideLeft'>
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