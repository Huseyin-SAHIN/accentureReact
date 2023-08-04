import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import cardBackground from "../assets/images/cardBackground.svg"

function FloatingCardBlock() {
    return (
        <div id='floatingCardBlock'>
            <div className='backgroundText'><h2>Global recognition and awards</h2></div>
            <div className='floatingCardContent'>
                <div className='floatingCard'>
                    <img className='CardContentBackground' src={cardBackground} />
                    <div className='cardTitle'>
                        <h3>We’re one of Fortune’s World’s Most Admired Companies</h3>
                    </div>
                    <div className='cardContent'>
                        <p>We are celebrating our 21st consecutive year on the list and 10th consecutive year as No. 1 in IT Services.</p>
                        <div className='cardForwarding'>
                            <a href="#">
                                <div className='cardForwardingLink'>Expand<FaAngleRight /></div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='floatingCard'>
                    <img className='CardContentBackground' src={cardBackground} />
                    <div className='cardTitle'>
                        <h3>We’re one of Fortune’s World’s Most Admired Companies</h3>
                    </div>
                    <div className='cardContent'>
                        <p>We are celebrating our 21st consecutive year on the list and 10th consecutive year as No. 1 in IT Services.</p>
                        <div className='cardForwarding'>
                            <a href="#">
                                <div className='cardForwardingLink'>Expand<FaAngleRight /></div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='floatingCard'>
                    <img className='CardContentBackground' src={cardBackground} />
                    <div className='cardTitle'>
                        <h3>We’re one of Fortune’s World’s Most Admired Companies</h3>
                    </div>
                    <div className='cardContent'>
                        <p>We are celebrating our 21st consecutive year on the list and 10th consecutive year as No. 1 in IT Services.</p>
                        <div className='cardForwarding'>
                            <a href="#">
                                <div className='cardForwardingLink'>Expand<FaAngleRight /></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='backgroundText'></div>
        </div>
    )
}

export default FloatingCardBlock