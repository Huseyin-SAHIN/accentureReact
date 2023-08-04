import React, { useEffect, useState } from 'react'
import joinUs from '../assets/images/joinUs.svg'
import us from '../assets/images/us.jpg'
import { FaAngleRight } from 'react-icons/fa'

function MixedMediaTextBlock({ scrollHeight }) {
    const [altitudeStatus, setAltitudeStatus] = useState(null)
    useEffect(() => {
        const mixedMediaTextBlockElement = document.getElementById('mixedMediaTextBlock');
        const Top = mixedMediaTextBlockElement.offsetTop;
        const mixedMediaTextBlockHeight = mixedMediaTextBlockElement.clientHeight;


        if (scrollHeight > Top && scrollHeight < Top + mixedMediaTextBlockHeight) {
            setAltitudeStatus(((scrollHeight - Top) / mixedMediaTextBlockHeight) * 100)
        } else if (scrollHeight < Top) {
            setAltitudeStatus(0)
        } else {
            setAltitudeStatus(100)
        }


    }, [scrollHeight]);

    const opacityStyle = {
        opacity: `${altitudeStatus * 10}%`
    }


    return (
        <div id='mixedMediaTextBlock'>
            <div className='MediaExhibition'>
                <img src={us} alt="Us" style={{ width: `${200 - (altitudeStatus) * 10}%` }} />
                <img src={joinUs} alt="Join Us" style={opacityStyle} />
            </div>
            <div className='promotion' style={opacityStyle}>
                <span>OUR CULTURE</span>
                <h3>We make change, together</h3>
                <p>We combine technology with human ingenuity to solve some of the world's biggest challenges. When you work with us, the possibilities are endless.</p>
                <a href="#">
                    <button>Join us <FaAngleRight /></button>
                </a>
            </div>
        </div>

    )
}

export default MixedMediaTextBlock
