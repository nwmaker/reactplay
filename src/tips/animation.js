import React from 'react'
import './animation.css'

class Animation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dots: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  }
  
  render() {
    const { dots } = this.state
    console.log('state', this.state)
    console.log('testing', dots)

    return (
      <div className='Dots'
        style={{ '--length': dots.length}}>
        {dots.map((dot, i) => (
          <div className='dot'
            style={{ '--i': i }}
            key={dot} />
        ))}
      </div>
    )
  }
}

export default Animation
