import React from 'react'
import './square-spin.css'
import ReactLogo from './logo.svg'

export default () => (
  <div className='ss-container'>
    <div className='square-spin'></div>
    <img src={ReactLogo} className="app-logo" alt="logo" />
  </div>
)
