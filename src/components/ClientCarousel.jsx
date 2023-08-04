import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { BiPause, BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'

function ClientCarousel() {
    return (
        <div id='clientCarousel'>
            <div className='clientCarouselControl'>
                <div className='clientCarouselImg'>
                    <div className='clientCarouselImgItem'>
                        <img src="https://picsum.photos/200/200" />
                    </div>
                </div>
                <div className='clientCarouselInfo'>
                    <div className='clientCarouselInfoItem'>
                        <h4>Machine learning dives deep to save our coral reefs</h4>
                        <div className='clientCarouselInfoContext' >
                            <p>Coral reefs, like rainforests, are severely threatened by climate change and pollution. But a new cloud-based AI tool is revolutionizing marine conservation around the world.</p>
                        </div>
                        <a href="#">
                            <div className='cardForwardingLink'>Read more <FaAngleRight /></div>
                        </a>
                    </div>
                </div>
            </div>
            <div className='sliderControl'>
                <button><BiPause /></button>
                <button><BiLeftArrowAlt /></button>
                <button><BiRightArrowAlt /></button>
            </div>
        </div>
    )
}

export default ClientCarousel