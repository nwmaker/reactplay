import React from 'react'
import './collapsablenav.css'

class CollapsableNav extends React.Component {

  burgerToggle() {
    let linksEl = document.querySelector('.narrowLinks')
    if (linksEl.style.display === 'block') {
      linksEl.style.display = 'none'
    } else {
      linksEl.style.display = 'block'
    }
  }

  render() {
    return (
      <div className='collapsable'>
        <div className='navWide'>
          <div className='wideDiv'>
            <a href='#home'>Home</a>
            <a href='#products'>Products</a>
	    <a href='#about'>About</a>
          </div>
        </div>
        <div className='navNarrow'>
          <i className='fa fa-bars fa-2x' onClick={this.burgerToggle}></i>
          <div className='narrowLinks'>
            <a href='#home' onClick={this.burgerToggle}>Home</a>
            <a href='#products' onClick={this.burgerToggle}>Products</a>
            <a href='#about' onClick={this.burgerToggle}>About</a>
          </div>
        </div>
      </div>
    )
  } 
}

export default CollapsableNav
