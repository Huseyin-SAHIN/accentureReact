import React, { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa'

function FrontPageHero() {

    const [mouseMove, setMouseMove] = useState(0)

    const handleMouseMove = (evnet) => {
        setMouseMove(evnet.clientX)
    }

    return (
        <div id='frontPageHero' onMouseMove={handleMouseMove}>
            <div className='heroPage'>
                <div className='heroTop' style={{
                    transform: `translateX(${mouseMove / 10}px)`
                }}>
                    <div className='heroAnimation'><span>REINVENT</span></div>
                    <div className='heroAnimation'><span>WHAT</span></div>
                    <div className='heroAnimation'><span>YOUR</span></div>
                </div>
                <div className='heroBottom' style={{
                    transform: `translateX(-${mouseMove / 4}px)`
                }}>
                    <div className='heroAnimation'><span>BUSINESS</span></div>
                    <div className='heroAnimation'><span>COULD</span></div>
                    <div className='heroAnimation'><span>BE</span></div>
                </div>
            </div>
            <div className='heroInfo'><span>Let there be change <FaAngleRight /></span></div>
        </div>
    )
}

export default FrontPageHero