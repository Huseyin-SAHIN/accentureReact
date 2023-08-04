import React from 'react'
import newsData from './newsData'

function News() {
  return (
    <div id='news'>
      {newsData.map((item, index) => (
        <div className='newsItem' key={index} >
          <a href="#">
            <p>{item.information}</p>
            <h3>{item.title}</h3>
          </a>
        </div>
      ))}
    </div>
  )
}

export default News