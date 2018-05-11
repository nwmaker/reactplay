import React from 'react'
import './content.css'

export default () => (
  <div className='content'>
    <div className='left'>
      Left side in wide screen, top in narrow screen
    </div>
    <div className='mid'>
      Middle in wide screen, mid in narrow screen
    </div>
    <div className='right'>
      Right side in wide screen, bottom in narrow screen
    </div>
  </div>
)
