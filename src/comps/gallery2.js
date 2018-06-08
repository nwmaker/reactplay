import React from 'react'
import GalleryItem from './galleryitem2'
import './gallery2.css'

/*
 * the photo array has the following format:
 * [url, title, category]
 *
 */
const photos = [
  ["https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop", "person writing in a notebook"],
  ["https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop", "sunset behind San Francisco city skyline"],
  ["https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop", "people holding umbrellas on a busy street at night lit by street lights"],
  ["https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=500&h=500&fit=crop", "car interior from central back seat"],
  ["https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop", "back view of woman wearing a backpack"],
  ["https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=500&h=500&fit=crop", "man wearing a black jacket"],
]

export default () => (
  <div className='gallery-container'>
    <h1 className='heading'>Image Gallery</h1>
    <div className='gallery'>
      {photos.map((x, i) => (
        <GalleryItem key={i} url={x[0]} alt={x[1]} />
      ))}
    </div>
  </div>
)
