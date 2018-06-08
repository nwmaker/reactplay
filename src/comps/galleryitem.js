import React from 'react'

export default ({url, title, category}) => (
  <div className='gallery-item'>
    <figure className='img-container'>
      <img className='gallery-image' src={url} alt={title} />
      <figcaption className='img-content'>
        <h2 className='title'>{title}</h2>
        <h3 className='category'>{category}</h3>
      </figcaption>
      <span className='img-content-hover'>
        <h2 className='title'>{title}</h2>
        <h3 className='category'>{category}</h3>
      </span>
    </figure>
  </div>
)
