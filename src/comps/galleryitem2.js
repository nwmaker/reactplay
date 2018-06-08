import React from 'react'

export default ({ url, alt }) => (
  <div className='gallery-item'>
    <img className="gallery-image" src={url} alt={alt} />
  </div>
)
