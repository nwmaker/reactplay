import React from 'react'
import GalleryItem from './galleryitem'
import './gallery.css'

/*
 * the photo array has the following format:
 * [url, title, category]
 *
 */
const photos = [
  ['https://source.unsplash.com/8b1cWDyvT7Y', 'Smart Watch', 'Showcase'],
  ['https://source.unsplash.com/5VXH4RG88gc', 'Camera Film', 'Showcase'],
  ['https://source.unsplash.com/XtUd5SiX464', 'Coffee', 'Showcase'],
  ['https://source.unsplash.com/JYGnB9gTCls', 'Phone', 'Showcase'],
  ['https://source.unsplash.com/-RBuQ2PK_L8', 'Keyboard', 'Showcase'],
  ['https://source.unsplash.com/P44RIGl9V54', 'Wrist Watch', 'Showcase'],
]

export default () => (
  <div className='gallery-container'>
    <h1 className='heading'>Image Gallery</h1>
    <div className='gallery'>
      <div className='grid'>
        {photos.map((x, i) => (
          <GalleryItem key={i} url={x[0]} title={x[1]} category={x[2]} />
        ))}
      </div>
    </div>
  </div>
)
