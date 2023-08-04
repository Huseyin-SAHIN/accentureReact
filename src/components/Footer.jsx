import React, { useState } from 'react'

function Footer() {

    const [mouseMove, setMouseMove] = useState(0)

    const handleMouseMove = (event) => {
        setMouseMove(event.clientX / 20)
    }

    return (
        <footer id='footer' onMouseMove={handleMouseMove}>
            <div className='footerLeft'>
                <h4>Let there be change</h4>
                <div className='footerLeftContent'>
                    <div className='listControl'>
                        <ul>
                            <li><a href="#">Preference Center</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Locations</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Privacy Statement</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Cookie Policy/Settings</a></li>
                            <li><a href="#">Accessibility Statement</a></li>
                            <li><a href="#">Do Not Sell/Share My Personal Information (for CA)</a></li>
                        </ul>
                    </div>
                    <p>© 2023 Accenture. All Rights Reserved.</p>
                </div>
            </div>
            <div className='footerRight'>
                <div className='footerRightItem'>
                    <div className='change' style={{ transform: `translateX(${mouseMove}px)` }}>
                        <span>C</span>
                        <span>H</span>
                        <span>A</span>
                        <span>N</span>
                        <span>C</span>
                        <span>E</span>
                    </div>
                    <div className='change' style={{ transform: `translateX(${mouseMove}px)` }}>
                        <span>C</span>
                        <span>H</span>
                        <span>A</span>
                        <span>N</span>
                        <span>C</span>
                        <span>E</span>
                    </div>
                </div>
                <div className='footerRightItem'>
                    <div className='change' style={{ transform: `translateX(${mouseMove}px)` }}>
                        <span>C</span>
                        <span>H</span>
                        <span>A</span>
                        <span>N</span>
                        <span>C</span>
                        <span>E</span>
                    </div>
                    <div className='change' style={{ transform: `translateX(${mouseMove}px)` }}>
                        <span>C</span>
                        <span>H</span>
                        <span>A</span>
                        <span>N</span>
                        <span>C</span>
                        <span>E</span>
                    </div>
                </div>
                <div className='footerRightItem'>
                    <div className='change' style={{ transform: `translateX(${mouseMove}px)` }}>
                        <span>C</span>
                        <span>H</span>
                        <span>A</span>
                        <span>N</span>
                        <span>C</span>
                        <span>E</span>
                    </div>
                    <div className='change' style={{ transform: `translateX(${mouseMove}px)` }}>
                        <span>C</span>
                        <span>H</span>
                        <span>A</span>
                        <span>N</span>
                        <span>C</span>
                        <span>E</span>
                    </div>
                </div>
                <div className='footerRightItem'>
                    <div className='change' style={{ transform: `translateX(${mouseMove}px)` }}>
                        <span>C</span>
                        <span>H</span>
                        <span>A</span>
                        <span>N</span>
                        <span>C</span>
                        <span>E</span>
                    </div>
                    <div className='change' style={{ transform: `translateX(${mouseMove}px)` }}>
                        <span>C</span>
                        <span>H</span>
                        <span>A</span>
                        <span>N</span>
                        <span>C</span>
                        <span>E</span>
                    </div>
                </div>
                <div className='footerRightItem'>
                    <div className='change' style={{ transform: `translateX(${mouseMove}px)` }}>
                        <span>C</span>
                        <span>H</span>
                        <span>A</span>
                        <span>N</span>
                        <span>C</span>
                        <span>E</span>
                    </div>
                    <div className='change' style={{ transform: `translateX(${mouseMove}px)` }}>
                        <span>C</span>
                        <span>H</span>
                        <span>A</span>
                        <span>N</span>
                        <span>C</span>
                        <span>E</span>
                    </div>
                </div>
                <div className='footerRightItem'>
                    <div className='change' style={{ transform: `translateX(${mouseMove}px)` }}>
                        <span>C</span>
                        <span>H</span>
                        <span>A</span>
                        <span>N</span>
                        <span>C</span>
                        <span>E</span>
                    </div>
                    <div className='change' style={{ transform: `translateX(${mouseMove}px)` }}>
                        <span>C</span>
                        <span>H</span>
                        <span>A</span>
                        <span>N</span>
                        <span>C</span>
                        <span>E</span>
                    </div>
                </div>
                <div className='footerRightItem'>
                    <div className='change' style={{ transform: `translateX(${mouseMove}px)` }}>
                        <span>C</span>
                        <span>H</span>
                        <span>A</span>
                        <span>N</span>
                        <span>C</span>
                        <span>E</span>
                    </div>
                    <div className='change' style={{ transform: `translateX(${mouseMove}px)` }}>
                        <span>C</span>
                        <span>H</span>
                        <span>A</span>
                        <span>N</span>
                        <span>C</span>
                        <span>E</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer