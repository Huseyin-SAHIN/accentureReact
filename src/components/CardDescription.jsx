import React, { useState, useEffect } from 'react';
import { FaAngleRight } from 'react-icons/fa'
import sliderData from './sliderData.json'

function CardDescription() {

  const [divWidth, setDivWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      const width = document.querySelector('#cardDescription .cardDescriptionControl').clientWidth;
      setDivWidth(width);
    };

    // Başlangıçta genişliği ayarla
    updateWidth();

    // Pencere yeniden boyutlandırıldığında genişliği güncelle
    window.addEventListener('resize', updateWidth);

    // Temizleme fonksiyonu
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <div id='cardDescription'>
      <div className='cardDescriptionControl'>
        {sliderData.map((item, index) => (
          <div
            className='cardItem'
            key={index}
            style={{
              background: `url(${item.image})`,
              color: `#${item.color}`,
              backgroundSize: 'cover',
            }}>
            <div className='cardTop'>
              <p className='cardInfo'>{item.cardInfo}</p>
              <div className='cardContent'>
                <h3 style={{
                  minWidth: divWidth / 5 - 32,
                  maxWidth: divWidth / 5 - 32
                }}>
                  <a href="#">{item.title}</a>
                </h3>
                <div
                  className='cardContentInfo'
                  style={{
                    minWidth: divWidth / 5 + 32,
                    maxWidth: divWidth / 5 + 32,
                    minHeight: divWidth / 8,
                  }}>
                  <a href="#">
                    <p>{item.content}</p>
                  </a>
                </div>
              </div>
            </div>
            <div className='cardBottom'>
              <a href="#">
                <p className=''>{item.buttomBoldText}</p>
                <p>{item.buttomContext}</p>
              </a>
              <div className='cardLink'>
                <a href="#">
                  <div className='cardLinkDiv'>
                    Expand <FaAngleRight />
                  </div>
                </a>
              </div>
            </div>
          </div>))}
      </div>
      <div className='cardDescriptionControl'>
        {sliderData.map((item, index) => (
          <div
            className='cardItem'
            key={index}
            style={{
              background: `url(${item.image})`,
              color: `#${item.color}`,
              backgroundSize: 'cover',
            }}>
            <div className='cardTop'>
              <p className='cardInfo'>{item.cardInfo}</p>
              <div className='cardContent'>
                <h3 style={{
                  minWidth: divWidth / 5 - 32,
                  maxWidth: divWidth / 5 - 32
                }}>
                  <a href="#">{item.title}</a>
                </h3>
                <div
                  className='cardContentInfo'
                  style={{
                    minWidth: divWidth / 5 + 32,
                    maxWidth: divWidth / 5 + 32,
                    minHeight: divWidth / 8,
                  }}>
                  <a href="#">
                    <p>{item.content}</p>
                  </a>
                </div>
              </div>
            </div>
            <div className='cardBottom'>
              <a href="#">
                <p className=''>{item.buttomBoldText}</p>
                <p>{item.buttomContext}</p>
              </a>
              <div className='cardLink'>
                <a href="#">
                  <div className='cardLinkDiv'>
                    Expand <FaAngleRight />
                  </div>
                </a>
              </div>
            </div>
          </div>))}
      </div>
    </div>
  )
}

export default CardDescription