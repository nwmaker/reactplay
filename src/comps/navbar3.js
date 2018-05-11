import React from 'react'
import './navbar3.css'

export default () => (
  <div className="navbar">
    <div className="left-container">
      <ul className="left-nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </div>
    <div className="mid-container">
      <h1 className="logo"><a href="#logo">NWMaker</a></h1>
    </div>
    <div className="right-container"> 
      <ul className="right-nav">
        <li><a href="#tindie">Tindie</a></li>
        <li><a href="#github">Github</a></li>
        <li><a href="#twitter">Twitter</a></li>
      </ul>
    </div>
  </div> 
)
